import { createTheme } from "@mui/material/styles";
import twinColors from "../colors/colors";

const twinTheme = createTheme({
  palette: {
    background: {
      default: twinColors.backgroundColor,
    },
  },
});

export default twinTheme;
