import React from "react";
import { AppBar, Container, Stack, Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, NavLink } from "react-router-dom";
import { routes } from "../../router/routeList";

export default function ProductAppBar() {
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
          <Fab
            variant="extended"
            size="small"
            color="inherit"
            aria-label="add"
            onClick={() => navigate("/")}
          >
            <ArrowBackIosNewIcon sx={{ mr: 1 }} />
            Back
          </Fab>
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
                      color: "#00FFDA",
                    }
                  : { color: "#545e6f" }
              }
              to={routes.KIT_PAGE}
            >
              Kits
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#00FFDA",
                    }
                  : { color: "#545e6f" }
              }
              to={routes.MODULE_PAGE}
            >
              Modules
            </NavLink>
          </Stack>
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            style={{ backgroundColor: "#00FFDA", color: "white" }}
            // onClick={() => navigate("../experimentsPage")}
          >
            CHOOSE
          </Fab>
        </Stack>
      </Container>
    </AppBar>
  );
}
