import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Paper,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../theme";
import { StyledTextBox } from "../CustomerSelection";

export default function NewDealStructure() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [textValues, setTextValues] = useState({
    "Market A/C No": "",
    "Customer Name": "",
  });
  const cs = 500;

  return (
    <Box
      //   sx={{ ml: 3, mr: 3 }}

      display={"flex"}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Paper
        elevation={3}
        sx={{
          width: "-webkit-fill-available",
          h1: {
            m: 0,
            mb: 2,
            p: 1,
            pl: 2,
            pr: 2,
            borderRadius: 1,
            // textDecoration: "underline",
            textDecorationColor: colors.greenAccent[500],
            background: colors.blueAccent[700],
          },
          background: `${colors.primary[cs]}`,
        }}
      >
        <h1>New Deal Structure</h1>

        <Box
          width={"-webkit-fill-available"}
          display={"flex"}
          sx={{ pl: 1, pr: 1, m: "auto", mt: 3, mb: 5 }}
          flexDirection="column"
          alignItems="center"
        >
          {/* <Box width={900} display="flex"> */}
          <Box width={"inherit"} display="flex" alignItems={"center"}>
            <StyledTextBox
              label={"Reference"}
              style={{ m: 1 }}
              textValues={textValues}
              setTextValues={setTextValues}
              full={true}
            />
            <StyledTextBox
              label={"SEQ Numb"}
              style={{ ml: 3, mr: 2 }}
              full={false}
              textValues={textValues}
              setTextValues={setTextValues}
            />
          </Box>
          <Box width={"inherit"} alignItems="center" display="flex">
            <StyledTextBox
              label={"Deposit Tracker"}
              style={{ m: 1, mr: 2 }}
              full={true}
              disabled
              textValues={textValues}
              setTextValues={setTextValues}
            />
          </Box>
          <Box width={"inherit"} alignItems="center" display="flex">
            <StyledTextBox
              label={"Currency"}
              style={{ m: 1 }}
              full={true}
              disabled
              textValues={textValues}
              setTextValues={setTextValues}
            />
            <StyledTextBox
              label={"Out Of"}
              style={{ ml: 3, mr: 2 }}
              full={false}
              disabled
              textValues={textValues}
              setTextValues={setTextValues}
            />
          </Box>
          <Divider flexItem sx={{ m: 1 }}></Divider>
          <Box width={"inherit"} alignItems="center" display="flex">
            <StyledTextBox
              label={"Term"}
              style={{ m: 1 }}
              full={true}
              textValues={textValues}
              setTextValues={setTextValues}
            />

            <Box display="flex" flexDirection={"column"}>
              <StyledTextBox
                label={"Trade Date"}
                style={{ ml: 2, mr: 2, mt: 2 }}
                full={false}
                textValues={textValues}
                setTextValues={setTextValues}
              />
              <StyledTextBox
                label={"Value Date"}
                style={{ ml: 2, mr: 2, mt: 2 }}
                full={false}
                disabled
                textValues={textValues}
                setTextValues={setTextValues}
              />
              <StyledTextBox
                label={"Matrity Date"}
                style={{ m: 2 }}
                full={false}
                textValues={textValues}
                setTextValues={setTextValues}
              />
            </Box>
          </Box>
          <Divider flexItem sx={{ m: 1 }}></Divider>

          <Box
            width={"inherit"}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <StyledTextBox
              label={"Amount"}
              style={{ m: 1, width: 157 }}
              full={false}
              textValues={textValues}
              setTextValues={setTextValues}
            />
            <Box display="flex" flexDirection={"row"}>
              <Divider flexItem orientation="vertical" sx={{ m: 1 }} />
              <Box display="flex" flexDirection={"column"}>
                <StyledTextBox
                  label={"Wall Street NO"}
                  style={{ m: 1, mr: 2 }}
                  full={false}
                  disabled
                  textValues={textValues}
                  setTextValues={setTextValues}
                />
                <StyledTextBox
                  label={"Remarks 1"}
                  style={{ m: 1, mr: 2 }}
                  full={false}
                  textValues={textValues}
                  setTextValues={setTextValues}
                />
                <FormGroup
                  sx={{
                    dipslay: "flex",
                    flexDirection: "row",
                    justifyContent: "center",

                    m: 1,
                    mr: 2,
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Deal place in Argon"
                  />
                  <StyledTextBox
                    label={"Deal No"}
                    style={{ mt: 1 }}
                    full={true}
                    textValues={textValues}
                    setTextValues={setTextValues}
                  />
                </FormGroup>

                <Divider flexItem sx={{ m: 1 }} />
              </Box>
            </Box>
          </Box>
          <Box width={"inherit"} alignItems="center" display="flex">
            <Box display="flex" flexDirection={"column"}>
              <StyledTextBox
                label={"adjustment"}
                style={{ m: 1 }}
                full={false}
                textValues={textValues}
                setTextValues={setTextValues}
              />
              <StyledTextBox
                label={"Customer Rate"}
                style={{ m: 1 }}
                full={false}
                textValues={textValues}
                setTextValues={setTextValues}
              />
            </Box>
            <Box width={"inherit"} display="flex" flexDirection={"column"}>
              <StyledTextBox
                label={"Notes"}
                style={{ m: 3, mr: 2, fontStyle: "italic" }}
                full={false}
                textValues={textValues}
                setTextValues={setTextValues}
                row={4}
              />
            </Box>
          </Box>
          {/* <Paper
              elevation={0}
              sx={{
                ml: 3,
                mr: 3,
                background: `${colors.primary[cs]}`,
                display: "flex",
                alignSelf: "center",
              }}
            ></Paper> */}
          {/* </Box> */}
        </Box>
      </Paper>
    </Box>
  );
}
