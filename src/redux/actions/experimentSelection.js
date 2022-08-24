import { createSlice } from "@reduxjs/toolkit";
import ExperimentList from "../../assets/json/experiments_v2_tr.json";

const initialState = {
  value: ExperimentList[0],
};

export const experimentSelectionSlice = createSlice({
  name: "experimentSelection",
  initialState,
  reducers: {
    updateCurrentExperiment: (state, action) => {
      return { ...state, value: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentExperiment } = experimentSelectionSlice.actions;

export default experimentSelectionSlice.reducer;
