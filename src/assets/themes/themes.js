import { createTheme } from "@mui/material/styles";
import twinColors from "../colors/colors";

const twinTheme = createTheme({
  palette: {
    primary: {
      main: twinColors.activeColor,
    },
    background: {
      default: twinColors.backgroundColor,
    },
  },
});

export default twinTheme;
