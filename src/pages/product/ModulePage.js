import { Grid } from "@mui/material";
import React from "react";
import ModuleCard from "../../components/cards/ModuleCard";
import { moduleCardList } from "../../components/cards/moduleCardList";
import ProductAppBar from "../../layout/appbars/ProductAppBar";

export default function ModulePage() {
  return (
    <Grid container>
      <ProductAppBar />
      {moduleCardList.map((moduleCard) => (
        <ModuleCard title={moduleCard.title} imgSrc={moduleCard.imgSrc} />
      ))}
    </Grid>
  );
}
