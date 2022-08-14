import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { useNavigate, NavLink } from "react-router-dom";
import { routes } from "../../router/routeList";

export default function ExperimentCard({
  title,
  duration,
  difficulty,
  imgSrc,
  size = 4,
}) {
  const navigate = useNavigate();
  return (
    <Grid item xs={size}>
      <Card
        sx={{ mt: 1, ml: 1, mr: 1 }}
        onClick={() => {
          navigate(routes.EXPERIMENT_DETAIL_PAGE);
        }}
      >
        <CardMedia
          component="img"
          // height="140"
          image={imgSrc}
          alt="experiment-card"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Stack direction="row" alignItems="center">
              <AccessTimeIcon />
              <Typography variant="body2" color="text.secondary">
                {duration}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <SignalCellularAltIcon />
              <Typography variant="body2" color="text.secondary">
                {difficulty}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
