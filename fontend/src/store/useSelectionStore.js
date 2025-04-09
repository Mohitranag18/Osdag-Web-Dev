import { create } from 'zustand';

const useSelectionStore = create((set) => ({
  // 1st state: selectedConnection
  selectedConnection: "Shear Connection",
  setSelectedConnection: (value) => set({ selectedConnection: value }),

  // 2nd state: selectedMomentConnection
  selectedMomentConnection: "Beam-to-Beam Splice",
  setSelectedMomentConnection: (value) => set({ selectedMomentConnection: value }),
}));

export default useSelectionStore;
