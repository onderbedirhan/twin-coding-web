import React from "react";
import { AppBar, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routeList";
import BackButton from "../../components/buttons/BackButton";

const ExperimentDetailAppBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar color="inherit" position="fixed" sx={{ mb: 2 }}>
      <Container maxWidth="xl" sx={{ mt: 1, mb: 1 }}>
        <BackButton
          onClick={() => {
            navigate(routes.EXPERIMENT_PAGE);
          }}
        />
      </Container>
    </AppBar>
  );
};

export default ExperimentDetailAppBar;
