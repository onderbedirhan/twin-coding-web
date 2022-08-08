import { Grid } from "@mui/material";
import React from "react";
import KitCard from "../../components/cards/KitCard";
import ProductAppBar from "../../layout/appbars/ProductAppBar";
import { useSelector } from "react-redux/es/exports";

export default function KitPage() {
  const cardList = useSelector((state) => state.kitSelection.value);

  return (
    <Grid container>
      <ProductAppBar />
      {cardList.map((kitCard) => (
        <KitCard
          key={kitCard.id}
          title={kitCard.title}
          imgSrc={kitCard.imgSrc}
          id={kitCard.id}
          checked={kitCard.checked}
        />
      ))}
    </Grid>
  );
}
