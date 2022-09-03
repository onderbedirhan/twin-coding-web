import AppRouter from "./router/AppRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import twinTheme from "./assets/themes/themes";

const App = () => {
  return (
    <ThemeProvider theme={twinTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
