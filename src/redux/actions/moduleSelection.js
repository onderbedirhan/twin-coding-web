import { createSlice } from "@reduxjs/toolkit";
import { moduleCardList } from "../../components/cards/moduleCardList";

const initialState = {
  value: moduleCardList,
};

export const moduleSelectionSlice = createSlice({
  name: "moduleSelection",
  initialState,
  reducers: {
    moduleToggle: (state, action) => {
      state.value.map((moduleCard) => {
        if (moduleCard.id === action.payload) {
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
