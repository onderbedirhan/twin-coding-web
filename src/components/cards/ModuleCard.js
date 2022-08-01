import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ModuleCard({ title, imgSrc, size = 4 }) {
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
        <CardMedia component="img" image={imgSrc} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
