import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Grid container>
      <AppRouter />
    </Grid>
  );
}

export default App;
