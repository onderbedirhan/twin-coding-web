import React from "react";
import { AppBar, Container, Stack, Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routeList";

export default function ExperimentDetailAppBar() {
  const navigate = useNavigate();
  return (
    <AppBar color="inherit" position="static" sx={{ mb: 2 }}>
      <Container maxWidth="xl" sx={{ mt: 1, mb: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Fab
            variant="extended"
            size="small"
            color="inherit"
            aria-label="add"
            onClick={() => {
              navigate(routes.EXPERIMENT_PAGE);
            }}
          >
            <ArrowBackIosNewIcon sx={{ mr: 1 }} />
            Back
          </Fab>
        </Stack>
      </Container>
    </AppBar>
  );
}
