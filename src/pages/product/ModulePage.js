import { Grid } from "@mui/material";
import React from "react";
import ModuleCard from "../../components/cards/ModuleCard";
import ProductAppBar from "../../layout/appbars/ProductAppBar";

export default function ModulePage() {
  return (
    <Grid container>
      <ProductAppBar />
      <ModuleCard
        title={"modulecard"}
        imgSrc={"https://picsum.photos/300/200"}
      />
      <ModuleCard
        title={"modulecard"}
        imgSrc={"https://picsum.photos/300/200"}
      />
      <ModuleCard
        title={"modulecard"}
        imgSrc={"https://picsum.photos/300/200"}
      />
      <ModuleCard
        title={"modulecard"}
        imgSrc={"https://picsum.photos/300/200"}
      />
      <ModuleCard
        title={"modulecard"}
        imgSrc={"https://picsum.photos/300/200"}
      />
    </Grid>
  );
}
