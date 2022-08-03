import { Grid } from "@mui/material";
import React from "react";
import ModuleCard from "../../components/cards/ModuleCard";
import ProductAppBar from "../../layout/appbars/ProductAppBar";
import { useSelector } from "react-redux/es/exports";

export default function ModulePage() {
  const moduleList = useSelector((state) => state.moduleSelection.value);

  return (
    <Grid container>
      <ProductAppBar />
      {moduleList.map((moduleCard) => (
        <ModuleCard
          title={moduleCard.title}
          imgSrc={moduleCard.imgSrc}
          id={moduleCard.id}
          checked={moduleCard.checked}
        />
      ))}
    </Grid>
  );
}
