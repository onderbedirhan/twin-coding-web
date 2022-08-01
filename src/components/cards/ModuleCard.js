import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid } from "@mui/material";
import { useState } from "react";

export default function ModuleCard({ title, imgSrc, size = 4 }) {
  const [cardClicked, setCardClicked] = useState(false);
  return (
    <Grid item xs={size}>
      <Card
        sx={{
          mt: 2,
          ml: 2,
          mr: 2,
          backgroundColor: cardClicked ? "#00FFDA" : "white",
          borderRadius: 4,
        }}
        onClick={() => {
          setCardClicked(!cardClicked);
        }}
      >
        <CardMedia component="img" image={imgSrc} alt="kit-card" />
        <CardContent>
          <Grid container justifyContent={"space-between"}>
            <Grid item>{title}</Grid>
            <Grid item>
              {cardClicked ? <CheckCircleIcon sx={{ color: "white" }} /> : null}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
