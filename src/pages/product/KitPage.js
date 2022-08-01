import { Grid } from "@mui/material";
import React from "react";
import KitCard from "../../components/cards/KitCard";
import ProductAppBar from "../../layout/appbars/ProductAppBar";

export default function KitPage() {
  return (
    <Grid container>
      <ProductAppBar />
      <KitCard title={"kitcard"} imgSrc={"https://picsum.photos/300/200"} />
      <KitCard title={"kitcard"} imgSrc={"https://picsum.photos/300/200"} />
      <KitCard title={"kitcard"} imgSrc={"https://picsum.photos/300/200"} />
      <KitCard title={"kitcard"} imgSrc={"https://picsum.photos/300/200"} />
      <KitCard title={"kitcard"} imgSrc={"https://picsum.photos/300/200"} />
    </Grid>
  );
}
