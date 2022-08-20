import React from "react";
import { AppBar, Container, Stack, Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ExperimentDetailAppBar() {
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
            // onClick={() => navigate("/")}
          >
            <ArrowBackIosNewIcon sx={{ mr: 1 }} />
            Back
          </Fab>
        </Stack>
      </Container>
    </AppBar>
  );
}
