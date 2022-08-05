import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import ModuleCard from "../../components/cards/ModuleCard";
import ProductAppBar from "../../layout/appbars/ProductAppBar";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { updateModuleCardList } from "../../redux/actions/moduleSelection";

export default function ModulePage() {
  const moduleList = useSelector((state) => state.moduleSelection.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("moduleCardList");
    const parsedData = JSON.parse(localData);
    if (parsedData != null) {
      dispatch(updateModuleCardList(parsedData));
    }
  }, []);

  return (
    <Grid container>
      <ProductAppBar />
      {moduleList.map((moduleCard) => (
        <ModuleCard
          key={moduleCard.id}
          title={moduleCard.title}
          imgSrc={moduleCard.imgSrc}
          id={moduleCard.id}
          checked={moduleCard.checked}
        />
      ))}
    </Grid>
  );
}
