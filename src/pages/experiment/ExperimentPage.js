import { Grid } from "@mui/material";
import React from "react";
import KitCard from "../../components/cards/KitCard";
import { useSelector } from "react-redux/es/exports";

export default function ExperimentPage() {
  const cardList = useSelector((state) => state.kitSelection.value);
  return (
    <Grid container>
      {cardList.map((kitCard) =>
        kitCard.checked ? (
          <KitCard
            key={kitCard.id}
            title={kitCard.title}
            imgSrc={kitCard.imgSrc}
            id={kitCard.id}
          />
        ) : null
      )}
    </Grid>
  );
}
