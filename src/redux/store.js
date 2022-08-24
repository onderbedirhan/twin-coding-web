import { configureStore } from "@reduxjs/toolkit";

import kitSelectionReducer from "./actions/kitSelection";
import moduleSelectionReducer from "./actions/moduleSelection";
import experimentSelectionReducer from "./actions/experimentSelection";
export const store = configureStore({
  reducer: {
    kitSelection: kitSelectionReducer,
    moduleSelection: moduleSelectionReducer,
    experimentSelection: experimentSelectionReducer,
  },
});
