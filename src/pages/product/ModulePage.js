import { Grid } from "@mui/material";
import React from "react";
import ModuleCard from "../../components/cards/ModuleCard";
import { useSelector } from "react-redux/es/exports";
import ProductLayout from "./ProductLayout";

const ModulePage = () => {
  const moduleList = useSelector((state) => state.moduleSelection.value);
  const baseUrl = "https://twinner.blob.core.windows.net/app/modules/";

  return (
    <ProductLayout>
      <Grid container>
        {moduleList.map((moduleCard) => (
          <Grid item xs="4">
            <ModuleCard
              key={moduleCard.ids[0]}
              title={moduleCard.name}
              imgSrc={baseUrl + moduleCard.image}
              id={moduleCard.ids[0]}
              checked={moduleCard.checked}
            />
          </Grid>
        ))}
      </Grid>
    </ProductLayout>
  );
};

export default ModulePage;
