import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux/es/exports";
import { moduleToggle } from "../../redux/actions/moduleSelection";

export default function ModuleCard({ title, imgSrc, size = 4, checked, id }) {
  const dispatch = useDispatch();

  return (
    <Grid item xs={size}>
      <Card
        sx={{
          mt: 2,
          ml: 2,
          mr: 2,
          borderRadius: 4,
        }}
        onClick={() => {
          dispatch(moduleToggle(id));
        }}
      >
        <CardMedia
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            maxHeight: 100,
            paddingBottom: 5,
          }}
          component="img"
          image={imgSrc}
          alt="kit-card"
        />

        <CardContent
          sx={{
            backgroundColor: checked ? "#00FFDA" : "white",
          }}
        >
          <Grid container justifyContent={"space-between"}>
            <Grid item>{title}</Grid>
            <Grid item>
              {checked ? <CheckCircleIcon sx={{ color: "white" }} /> : null}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
