import React from "react";
import { AppBar, Container, Stack, Fab, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
export default function ExperimentAppBar() {
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
            EXPERIMENTS
          </Stack>
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            style={{ backgroundColor: "#00FFDA", color: "white" }}
          >
            CHOOSE
          </Fab>
        </Stack>
      </Container>
    </AppBar>
  );
}
