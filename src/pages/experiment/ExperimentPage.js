import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import ExperimentCard from "../../components/cards/ExperimentCard";
import { experimentCardList } from "../../components/cards/experimentCardList";
import ExperimentAppBar from "../../layout/appbars/ExperimentAppBar";

export default function ExperimentPage() {
  return (
    <Grid container>
      <ExperimentAppBar />
      {experimentCardList.map((experimentCard) => (
        <ExperimentCard
          key={experimentCard.id}
          title={experimentCard.title}
          imgSrc={experimentCard.imgSrc}
          duration={experimentCard.duration}
          difficulty={experimentCard.diffuculty}
        />
      ))}
    </Grid>
  );
}
