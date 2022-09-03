import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { routes } from "./routeList";
import KitPage from "../pages/product/KitPage";
import ModulePage from "../pages/product/ModulePage";
import ExperimentPage from "../pages/experiment/ExperimentPage";
import { useDispatch } from "react-redux/es/exports";
import { updateKitCardList } from "../redux/actions/kitSelection";
import { updateModuleCardList } from "../redux/actions/moduleSelection";
import ExperimentDetailPage from "../pages/experiment/ExperimentDetailPage";

const AppRouter = () => {
  const dispatch = useDispatch();
  const kitData = localStorage.getItem("kits");
  const kitParsedData = JSON.parse(kitData);
  const moduleData = localStorage.getItem("modules");
  const moduleParsedData = JSON.parse(moduleData);

  useEffect(() => {
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
        <Route
          path={routes.HOME_PAGE}
          // User first login to app shows that kit page another situations shows that experiment page
          element={
            kitData != null || moduleData != null ? (
              <ExperimentPage />
            ) : (
              <KitPage />
            )
          }
        />
        <Route path={routes.KIT_PAGE} element={<KitPage />} />
        <Route path={routes.MODULE_PAGE} element={<ModulePage />} />
        <Route path={routes.EXPERIMENT_PAGE} element={<ExperimentPage />} />
        <Route
          path={routes.EXPERIMENT_DETAIL_PAGE}
          element={<ExperimentDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
