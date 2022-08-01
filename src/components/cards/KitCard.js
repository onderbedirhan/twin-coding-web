import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useState } from "react";

export default function KitCard({ title, imgSrc, size = 4 }) {
  const [cardClicked, setCardClicked] = useState(false);
  return (
    <Grid item xs={size}>
      <Card
        sx={{
          mt: 1,
          ml: 1,
          mr: 1,
          backgroundColor: cardClicked ? "cyan" : "white",
        }}
        onClick={() => {
          setCardClicked(!cardClicked);
        }}
      >
        <CardMedia component="img" image={imgSrc} alt="kit-card" />
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
