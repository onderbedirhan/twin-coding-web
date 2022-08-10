import { createSlice } from "@reduxjs/toolkit";
import { moduleCardList } from "../../components/cards/moduleCardList";
import Modules from "../../assets/json/modules_tr.json";

const initialState = {
  value: Modules,
};

export const moduleSelectionSlice = createSlice({
  name: "moduleSelection",
  initialState,
  reducers: {
    moduleToggle: (state, action) => {
      state.value.map((moduleCard) => {
        if (moduleCard.ids[0] === action.payload) {
          moduleCard.checked = !moduleCard.checked;
        }
      });
    },
    updateModuleCardList: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { moduleToggle, updateModuleCardList } =
  moduleSelectionSlice.actions;

export default moduleSelectionSlice.reducer;
