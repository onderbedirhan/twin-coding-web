import { createSlice } from "@reduxjs/toolkit";
import { kitCardList } from "../../components/cards/kitCardList";

const initialState = {
  value: kitCardList,
};

export const toggleSelectionSlice = createSlice({
  name: "toggleSelection",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.value.map((kitCard) => {
        if (kitCard.id === action.payload) {
          kitCard.checked = !kitCard.checked;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = toggleSelectionSlice.actions;

export default toggleSelectionSlice.reducer;
