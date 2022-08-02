import { Grid } from "@mui/material";
import React from "react";
import KitCard from "../../components/cards/KitCard";
import { kitCardList } from "../../components/cards/kitCardList";
import ProductAppBar from "../../layout/appbars/ProductAppBar";

export default function KitPage() {
  return (
    <Grid container>
      <ProductAppBar />
      {kitCardList.map((kitCard) => (
        <KitCard title={kitCard.title} imgSrc={kitCard.imgSrc} />
      ))}
    </Grid>
  );
}
