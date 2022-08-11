import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import ExperimentCard from "../../components/cards/ExperimentCard";
import { experimentCardList } from "../../components/cards/experimentCardList";
import ExperimentAppBar from "../../layout/appbars/ExperimentAppBar";
import Experiments from "../../assets/json/experiments_v2_tr.json";

export default function ExperimentPage() {
  const selectDifficulty = (difficulty) => {
    if (difficulty == 1) {
      return "Kolay";
    } else if (difficulty == 2) {
      return "Orta";
    } else {
      return "Zor";
    }
  };
  return (
    <Grid container>
      <ExperimentAppBar />
      {Experiments.map((experimentCard) => (
        <ExperimentCard
          key={experimentCard.id}
          title={experimentCard.title}
          imgSrc={experimentCard.imageName}
          duration={experimentCard.duration}
          difficulty={selectDifficulty(experimentCard.difficulty)}
        />
      ))}
    </Grid>
  );
}
