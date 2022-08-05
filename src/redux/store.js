import { configureStore } from "@reduxjs/toolkit";

import kitSelectionReducer from "./actions/kitSelection";
import moduleSelectionReducer from "./actions/moduleSelection";

export const store = configureStore({
  reducer: {
    kitSelection: kitSelectionReducer,
    moduleSelection: moduleSelectionReducer,
  },
});
