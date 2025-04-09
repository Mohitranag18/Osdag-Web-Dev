from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def beam_to_beam_connection_view(request):
    data = request.data

    try:
        # --- Extract input values safely ---
        moment = float(data.get("bending_moment_kNm", 0))            # kNm
        shear = float(data.get("shear_force_kN", 0))                 # kN
        axial = float(data.get("axial_force", 0)) * 1000             # kN to N

        bolt_data = data.get("bolt", {})
        bolt_diameter = float(bolt_data.get("diameter_mm", 20))     # mm
        bolt_class = bolt_data.get("property_class", "8.8")

        end_plate_thickness = float(data.get("end_plate_thickness_mm", 12))  # mm

        # --- Constants (can be moved to config) ---
        bolt_strength_map = {
            "8.8": 800,  # N/mm²
            "4.6": 400
        }
        bolt_strength = bolt_strength_map.get(bolt_class, 400)  # fallback if unknown class

        bolt_area = 3.14 * (bolt_diameter ** 2) / 4 / 100  # mm² to cm² to convert as needed
        bearing_capacity_per_bolt = 300  # kN (assumed)
        no_of_bolts = 4  # assumed

        # --- Computations ---
        shear_demand = shear / no_of_bolts * 1000                     # kN to N
        shear_capacity = 0.6 * bolt_strength * bolt_area             # N

        tension_due_to_moment = (moment * 1e6) / (bolt_diameter * 4 * 1000)  # N
        prying_force = 0.1 * tension_due_to_moment
        tension_demand = (axial / no_of_bolts) + tension_due_to_moment + prying_force
        tension_capacity = bolt_strength * bolt_area                 # N

        combined_capacity_IR = (shear_demand / shear_capacity) + (tension_demand / tension_capacity)

        # --- Response ---
        output_data = {
            "critical_bolt_design": {
                "diameter_mm": bolt_diameter,
                "property_class": bolt_class,
                "shear_demand_kN": round(shear_demand / 1000, 2),  # back to kN
                "shear_capacity_kN": round(shear_capacity / 1000, 2),
                "bearing_capacity_kN": bearing_capacity_per_bolt,
                "beta_bg": 0.85,
                "bolt_capacity": round((shear_capacity + tension_capacity) / 1000, 2),
                "tension_due_to_moment_kN": round(tension_due_to_moment / 1000, 2),
                "prying_force_kN": round(prying_force / 1000, 2),
                "tension_demand_kN": round(tension_demand / 1000, 2),
                "tension_capacity_kN": round(tension_capacity / 1000, 2),
                "combined_capacity_IR": round(combined_capacity_IR, 2)
            },
            "detailing": {
                "no_of_bolts": no_of_bolts,
                "no_of_columns": 2,
                "no_of_rows": 2,
                "pitch_distance_mm": 70,
                "gauge_distance_mm": 50,
                "cross_centre_gauge_mm": 100,
                "end_distance_mm": 40,
                "edge_distance_mm": 30
            },
            "end_plate": {
                "thickness_mm": end_plate_thickness,
                "height_mm": 300,
                "width_mm": 200,
                "moment_capacity_kNm": round(moment * 1.25, 2)
            },
            "stiffener_plate": {
                "dimensions": "200x10 mm",
                "typical_sketch": "Provided"
            },
            "weld_at_web": {
                "size_mm": 6,
                "total_length_mm": 400,
                "stress_N_per_mm": 150,
                "combined_stress_N_per_mm2": 180,
                "strength_N_per_mm2": 200
            },
            "weld_at_flange": {
                "type": data.get("weld_type", "Groove Weld")
            }
        }

        return Response(output_data, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
