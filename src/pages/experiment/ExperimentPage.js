import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import ExperimentCard from "../../components/cards/ExperimentCard";
import { experimentCardList } from "../../components/cards/experimentCardList";
import ExperimentAppBar from "../../layout/appbars/ExperimentAppBar";
import Experiments from "../../assets/json/experiments_v2_tr.json";

export default function ExperimentPage() {
  const cardList = useSelector((state) => state.kitSelection.value);
  const moduleList = useSelector((state) => state.moduleSelection.value);
  const sampleList = [];

  for (let i = 0; i < cardList.length; i++) {
    if (cardList[i].checked) {
      // console.log(cardList[i].ids);
      for (let j = 0; j < cardList[i].ids.length; j++) {
        if (sampleList.indexOf(cardList[i].ids[j]) === -1) {
          sampleList.push(cardList[i].ids[j]);
        }
      }
    }
  }

  for (let i = 0; i < moduleList.length; i++) {
    if (moduleList[i].checked) {
      // console.log(moduleList[i].ids);
      if (sampleList.indexOf(moduleList[i].ids[0]) === -1) {
        sampleList.push(moduleList[i].ids[0]);
      }
    }
  }

  function compareTwoArray(value) {
    return value.every((element) => {
      if (sampleList.includes(element)) {
        return true;
      }

      return false;
    });
  }

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
      {Experiments.map((experimentCard) =>
        compareTwoArray(experimentCard.requiredIds) ? (
          <ExperimentCard
            key={experimentCard.id}
            title={experimentCard.title}
            imgSrc={experimentCard.imageName}
            duration={experimentCard.duration}
            difficulty={selectDifficulty(experimentCard.difficulty)}
          />
        ) : null
      )}
    </Grid>
  );
}
