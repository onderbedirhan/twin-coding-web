import { Grid } from "@mui/material";
import React from "react";
import KitCard from "../../components/cards/KitCard";
import { useSelector } from "react-redux/es/exports";
import ProductLayout from "./ProductLayout";

const KitPage = () => {
  const cardList = useSelector((state) => state.kitSelection.value);
  const baseUrl = "https://twinner.blob.core.windows.net/app/kits/";

  return (
    <ProductLayout>
      <Grid container>
        
        {cardList.map((kitCard) => (
          <Grid item xs="4">
          <KitCard
            key={kitCard.id}
            title={kitCard.name}
            imgSrc={baseUrl + kitCard.image}
            id={kitCard.id}
            checked={kitCard.checked}
          />
          </Grid>
        ))}
      </Grid>
    </ProductLayout>
  );
}

export default KitPage;