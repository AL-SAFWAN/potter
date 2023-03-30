import { Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import { tokens } from "../theme";

function Header({ title, subtitles }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px" mt="40px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitles}
      </Typography>
    </Box>
  );
}

export default Header;
