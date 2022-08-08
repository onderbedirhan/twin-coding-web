import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { routes } from "./routeList";
import KitPage from "../pages/product/KitPage";
import ModulePage from "../pages/product/ModulePage";
import ExperimentPage from "../pages/experiment/ExperimentPage";
import { useDispatch } from "react-redux/es/exports";
import { updateKitCardList } from "../redux/actions/kitSelection";
import { updateModuleCardList } from "../redux/actions/moduleSelection";

export default function AppRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    const kitData = localStorage.getItem("kitCardList");
    const kitParsedData = JSON.parse(kitData);
    const moduleData = localStorage.getItem("moduleCardList");
    const moduleParsedData = JSON.parse(moduleData);
    if (kitParsedData != null) {
      dispatch(updateKitCardList(kitParsedData));
    }
    if (moduleParsedData != null) {
      dispatch(updateModuleCardList(moduleParsedData));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME_PAGE} element={<KitPage />} />
        <Route path={routes.KIT_PAGE} element={<KitPage />} />
        <Route path={routes.MODULE_PAGE} element={<ModulePage />} />
        <Route path={routes.EXPERIMENT_PAGE} element={<ExperimentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
