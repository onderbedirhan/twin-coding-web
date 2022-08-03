import { configureStore } from "@reduxjs/toolkit";

import toggleSelectionReducer from "./actions/kitToggleSelection";
import moduleSelectionReducer from "./actions/moduleToggleSelection";

export const store = configureStore({
  reducer: {
    toggleSelection: toggleSelectionReducer,
    moduleSelection: moduleSelectionReducer,
  },
});
