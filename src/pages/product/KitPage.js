import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import KitCard from "../../components/cards/KitCard";
import ProductAppBar from "../../layout/appbars/ProductAppBar";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { updateKitCardList } from "../../redux/actions/kitSelection";

export default function KitPage() {
  const cardList = useSelector((state) => state.kitSelection.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("kitCardList");
    const parsedData = JSON.parse(localData);
    if (parsedData != null) {
      dispatch(updateKitCardList(parsedData));
    }
  }, []);

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
