import React from "react";
import { AppBar, Container, Stack } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { routes } from "../../router/routeList";
import { useSelector } from "react-redux/es/exports";
import BackButton from "../../components/buttons/BackButton";
import NavigatorButton from "../../components/buttons/NavigatorButton";
import twinColors from "../../assets/colors/colors";

const ProductAppBar = () => {
  const kitList = useSelector((state) => state.kitSelection.value);
  const moduleList = useSelector((state) => state.moduleSelection.value);
  const navigate = useNavigate();
  return (
    <AppBar color="inherit" position="static">
      <Container maxWidth="xl" sx={{ mt: 1, mb: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <BackButton onClick={() => navigate("/")} />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      // color: "#00FFDA",
                      fontWeight: "bold",
                      fontSize: "25px",
                      textDecorationColor: twinColors.activeColor,
                      color: "#000000",
                    }
                  : {
                      color: "#545e6f",
                      fontSize: "18px",
                      textDecoration: "none",
                    }
              }
              to={routes.KIT_PAGE}
            >
              Kits
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      // color: "#00FFDA",
                      fontWeight: "bold",
                      fontSize: "25px",
                      textDecorationColor: twinColors.activeColor,
                      color: "#000000",
                    }
                  : {
                      color: "#545e6f",
                      fontSize: "18px",
                      textDecoration: "none",
                    }
              }
              to={routes.MODULE_PAGE}
            >
              Modules
            </NavLink>
          </Stack>
          <NavigatorButton
            buttonText="CHOOSE"
            onClick={() => {
              navigate(routes.EXPERIMENT_PAGE);
              localStorage.setItem("kits", JSON.stringify(kitList));
              localStorage.setItem("modules", JSON.stringify(moduleList));
            }}
          />
        </Stack>
      </Container>
    </AppBar>
  );
};

export default ProductAppBar;
