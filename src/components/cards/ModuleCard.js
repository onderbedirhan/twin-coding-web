import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { moduleToggle } from "../../redux/actions/moduleToggleSelection";

export default function ModuleCard({
  title,
  imgSrc,
  size = 4,
  checked,
  id,
  toggleSelection,
}) {
  // const [cardClicked, setCardClicked] = useState(false);
  // const cardClicked = useSelector((state) => state.moduleSelection.value[id]);
  const dispatch = useDispatch();

  return (
    <Grid item xs={size}>
      <Card
        sx={{
          mt: 2,
          ml: 2,
          mr: 2,
          backgroundColor: checked ? "#00FFDA" : "white",
          borderRadius: 4,
        }}
        onClick={() => {
          dispatch(moduleToggle(id));
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
