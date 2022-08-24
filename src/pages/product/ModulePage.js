import { Grid } from "@mui/material";
import React from "react";
import ModuleCard from "../../components/cards/ModuleCard";
import ProductAppBar from "../../layout/appbars/ProductAppBar";
import { useSelector } from "react-redux/es/exports";

export default function ModulePage() {
  const moduleList = useSelector((state) => state.moduleSelection.value);
  const baseUrl = "https://twinner.blob.core.windows.net/app/modules/";

  return (
    <Grid container>
      <ProductAppBar />
      <Grid container item sx={{ mt: 5 }}>
        {moduleList.map((moduleCard) => (
          <ModuleCard
            key={moduleCard.ids[0]}
            title={moduleCard.name}
            imgSrc={baseUrl + moduleCard.image}
            id={moduleCard.ids[0]}
            checked={moduleCard.checked}
          />
        ))}
      </Grid>
    </Grid>
  );
}
