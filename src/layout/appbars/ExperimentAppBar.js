import React from "react";
import { AppBar, Container, Stack, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routeList";
import BackButton from "../../components/buttons/BackButton";
import NavigatorButton from "../../components/buttons/NavigatorButton";

const ExperimentAppBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar color="inherit" position="static">
      <Container maxWidth="xl" sx={{ mt: 1, mb: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <BackButton onClick={() => navigate("/")} />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h7" color="initial" fontWeight="bold">
              EXPERIMENTS
            </Typography>
          </Stack>
          <NavigatorButton
            buttonText="KITS"
            onClick={() => {
              navigate(routes.KIT_PAGE);
            }}
          />
        </Stack>
      </Container>
    </AppBar>
  );
};

export default ExperimentAppBar;
