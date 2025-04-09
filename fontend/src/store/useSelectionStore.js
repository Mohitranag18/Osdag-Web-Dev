import { create } from 'zustand';

const useSelectionStore = create((set) => ({
  // 1st state: selectedConnection
  selectedConnection: "Shear Connection",
  setSelectedConnection: (value) => set({ selectedConnection: value }),

  // 2nd state: outputdata beam to beam end plate connection
  outputData: {},
  setOutputData: (value) => set({outputData: value}),

  //3rd state: mainMode
  mainMode: "",
  setMainMode: (value) => set({ mainMode: value }),
}));

export default useSelectionStore;
