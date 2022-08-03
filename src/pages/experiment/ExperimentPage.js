import { Grid } from "@mui/material";
import React from "react";
import { kitCardList } from "../../components/cards/kitCardList";
import KitCard from "../../components/cards/KitCard";

export default function ExperimentPage() {
  return (
    <Grid container>
      {kitCardList.map((kitCard) =>
        kitCard.checked ? (
          <KitCard
            title={kitCard.title}
            imgSrc={kitCard.imgSrc}
            id={kitCard.id}
          />
        ) : null
      )}
    </Grid>
  );
}
