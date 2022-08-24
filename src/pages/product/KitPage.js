import { Grid } from "@mui/material";
import React from "react";
import KitCard from "../../components/cards/KitCard";
import ProductAppBar from "../../layout/appbars/ProductAppBar";
import { useSelector } from "react-redux/es/exports";

export default function KitPage() {
  const cardList = useSelector((state) => state.kitSelection.value);
  const baseUrl = "https://twinner.blob.core.windows.net/app/kits/";

  return (
    <Grid container>
      <ProductAppBar />
      <Grid container item sx={{ mt: 6 }}>
        {cardList.map((kitCard) => (
          <KitCard
            key={kitCard.id}
            title={kitCard.name}
            imgSrc={baseUrl + kitCard.image}
            id={kitCard.id}
            checked={kitCard.checked}
          />
        ))}
      </Grid>
    </Grid>
  );
}
