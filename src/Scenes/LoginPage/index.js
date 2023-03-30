import { Box, Button, Paper, TextField, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

export default function LandingPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const StyledTextBox = ({ label, full = false, style }) => (
    <TextField
      sx={{
        ...style,
        // backgroundColor: theme.palette.primary[100],
        "& label.Mui-focused": {
          color: colors.grey[100],
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: colors.grey[100],
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: colors.grey[100],
          },
          "&:hover fieldset": {
            borderColor: colors.grey[100],
          },
          "&.Mui-focused fieldset": {
            borderColor: colors.grey[100],
          },
        },
      }}
      fullWidth={full}
      id="outlined-basic"
      label={label}
      variant="outlined"
    />
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", mt: 40 }}>
      <Paper sx={{ height: "600px", width: "500px" }}>
        <h1>Welcome to storm</h1>
        <p>Please fill in your credentials</p>
        <Box>
          <StyledTextBox label={"email"} />
          <StyledTextBox label={"password"} />
        </Box>
      </Paper>
    </Box>
  );
}
