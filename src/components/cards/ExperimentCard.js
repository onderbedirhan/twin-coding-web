import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { routes } from "../../router/routeList";
import ExperimentDetailList from "../../assets/json/experiments_v2_tr.json";
import { updateCurrentExperiment } from "../../redux/actions/experimentSelection";

const ExperimentCard = ({ index, title, duration, difficulty, imgSrc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card
      sx={{ mt: 2, ml: 2, mr: 2, borderRadius: 4 }}
      onClick={() => {
        dispatch(updateCurrentExperiment(ExperimentDetailList[index]));
        navigate(routes.EXPERIMENT_DETAIL_PAGE);
      }}
    >
      <CardMedia
        component="img"
        image={imgSrc}
        alt="experiment-card"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          maxHeight: "140px",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
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
            <Typography variant="body2" color="text.secondary" marginLeft="2px">
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
  );
};

export default ExperimentCard;
