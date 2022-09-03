import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid } from "@mui/material";
import { kitToggle } from "../../redux/actions/kitSelection";
import { useDispatch } from "react-redux/es/exports";
import twinColors from "../../assets/colors/colors";

const KitCard = ({ title, imgSrc, checked, id }) => {
  const dispatch = useDispatch();

  return (
    <Card
      key={id}
      sx={{
        mt: 2,
        ml: 2,
        mr: 2,
        borderRadius: 4,
      }}
      onClick={() => {
        dispatch(kitToggle(id));
      }}
    >
      <CardMedia
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
          maxHeight: 140,
          paddingBottom: 5,
        }}
        component="img"
        image={imgSrc}
        alt="kit-card"
      />
      <CardContent
        sx={{
          backgroundColor: checked ? twinColors.activeColor : "white",
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <Grid item>{title}</Grid>
          <Grid item>
            <CheckCircleIcon
              disabled={checked ? false : true}
              sx={{ color: "white" }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default KitCard;
