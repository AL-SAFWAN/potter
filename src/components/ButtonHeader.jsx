import { Button, ButtonGroup, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ButtonHeader() {
  return (
    <Box>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  );
}
