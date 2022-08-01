import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { routes } from "./routeList";
import KitPage from "../pages/product/KitPage";
import ModulePage from "../pages/product/ModulePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME_PAGE} element={<KitPage />} />
        <Route path={routes.KIT_PAGE} element={<KitPage />} />
        <Route path={routes.MODULE_PAGE} element={<ModulePage />} />
      </Routes>
    </BrowserRouter>
  );
}
