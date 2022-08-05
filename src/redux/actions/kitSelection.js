import { createSlice } from "@reduxjs/toolkit";
import { kitCardList } from "../../components/cards/kitCardList";

const initialState = {
  value: kitCardList,
};

export const kitSelectionSlice = createSlice({
  name: "kitSelection",
  initialState,
  reducers: {
    kitToggle: (state, action) => {
      state.value.map((kitCard) => {
        if (kitCard.id === action.payload) {
          kitCard.checked = !kitCard.checked;
        }
      });
    },
    updateKitCardList: (state, action) => {
      return { ...state, value: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { kitToggle, updateKitCardList } = kitSelectionSlice.actions;

export default kitSelectionSlice.reducer;
