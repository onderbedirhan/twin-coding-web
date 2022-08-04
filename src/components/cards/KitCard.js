import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid } from "@mui/material";
import { toggle } from "../../redux/actions/kitToggleSelection";
import { useSelector, useDispatch } from "react-redux/es/exports";

export default function KitCard({
  title,
  imgSrc,
  size = 4,
  checked,
  id,
  toggleSelection,
}) {
  const dispatch = useDispatch();

  return (
    <Grid item xs={size}>
      <Card
        key={id}
        sx={{
          mt: 2,
          ml: 2,
          mr: 2,
          backgroundColor: checked ? "#00FFDA" : "white",
          borderRadius: 4,
        }}
        onClick={() => {
          dispatch(toggle(id));
        }}
      >
        <CardMedia component="img" image={imgSrc} alt="kit-card" />
        <CardContent>
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
