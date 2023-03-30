import React from "react";
import ButtonHeader from "../../components/ButtonHeader";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";

export default function Context() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [checked, setChecked] = React.useState([0]);
  const cs = 500;
  // [TODO] change to 500 and fix the styling
  //  change the menu to mini variant drawer
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const rows = [
    {
      id: 1,
      col1: "11223310",
      col2: "Open",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
    {
      id: 2,
      col1: "11223310",
      col2: "Close",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
    {
      id: 3,
      col1: "31223310",
      col2: "",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
    {
      id: 4,
      col1: "01223310",
      col2: "Open",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
    {
      id: 5,
      col1: "01223310",
      col2: "Open",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
    {
      id: 6,
      col1: "01223310",
      col2: "Open",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
    {
      id: 7,
      col1: "01223310",
      col2: "Open",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
    {
      id: 8,
      col1: "01223310",
      col2: "Open",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
    {
      id: 9,
      col1: "01223310",
      col2: "Open",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
    {
      id: 10,
      col1: "01223310",
      col2: "Open",
      col3: "NI - Treasury Reserve",
      col4: "PATTERSON AJ",
      col5: "30 Floyle Crescent",
    },
  ];

  const columns = [
    {
      field: "col1",
      headerName: "Market A/C No",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "col2",
      headerName: "State",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    { field: "col3", headerName: "Deposit Tracker", flex: 1 },
    { field: "col4", headerName: "Name", flex: 1 },
    { field: "col5", headerName: "Address", flex: 1 },
  ];

  const StyledTextBox = ({ label, full = false, style }) => (
    <TextField
      sx={{
        ...style,
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
      variant="filled"
      size="small"
    />
  );
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Paper
          elevation={3}
          sx={{
            p: 1,
            "h1,p": { m: 2 },
            h1: {
              textDecoration: "underline",
              textDecorationColor: colors.greenAccent[500],
            },
            background: `${colors.primary[cs]}`,
          }}
        >
          <h1>Customer Section </h1>

          {/* text */}
          <Box
            display={"flex"}
            // sx={{ mt: 1, ml: 3, mr: 3 }}
            flexDirection="column"
            alignItems="center"
          >
            <Box display="flex">
              <Box>
                <Box display="flex">
                  <StyledTextBox
                    label={"Market A/C No:"}
                    style={{ m: 1 }}
                    full="true"
                  />
                  <StyledTextBox
                    label={"Customer Name "}
                    style={{ m: 1 }}
                    full="true"
                  />
                </Box>

                <Box display="flex">
                  <StyledTextBox
                    label={"Wall Street Key"}
                    style={{ m: 1 }}
                    full="true"
                  />
                  <StyledTextBox label={"CIN"} style={{ m: 1 }} full="true" />
                </Box>

                <Box display="flex">
                  <StyledTextBox
                    label={"Sort Code"}
                    style={{ m: 1 }}
                    full="true"
                  />
                  <StyledTextBox
                    label={"Account Number"}
                    style={{ m: 1 }}
                    full="true"
                  />
                </Box>
              </Box>
              <Paper
                elevation={0}
                sx={{
                  ml: 3,
                  mr: 3,
                  background: `${colors.primary[cs]}`,
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                <Box
                  sx={{ ml: 3, mr: 3 }}
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormControl>
                    <FormLabel
                      color="secondary"
                      id="demo-row-radio-buttons-group-label"
                    >
                      State Filter
                    </FormLabel>
                    <RadioGroup
                      // row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Live"
                        control={<Checkbox color="secondary" />}
                        label="Live"
                      />
                      <FormControlLabel
                        value="Closed"
                        control={<Checkbox color="secondary" />}
                        label="Closed"
                      />
                      {/* <FormControlLabel
                        value="All"
                        control={<Radio color="secondary" />}
                        label="All"
                      /> */}
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Paper
                  elevation={0}
                  sx={{
                    width: 360,
                    height: 150,
                    ml: 1,
                    mr: 1,
                    background: `${colors.primary[cs]}`,

                    "& .MuiDataGrid-cell": {
                      borderColor: `${colors.blueAccent[800]} !important `,
                    },
                    "& .MuiDataGrid-cell:focus": {
                      outline: "0px !important",
                    },

                    "& .MuiDataGrid-root": {
                      borderColor: `${colors.blueAccent[800]}  !important`,
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.blueAccent[700],
                      borderColor: `${colors.blueAccent[800]}  !important`,
                      borderBottom: "none",
                    },
                    "& .Mui-checked": {
                      color: `${colors.greenAccent[500]} !important`,
                    },
                  }}
                >
                  <DataGrid
                    // autoHeight
                    density="compact"
                    rows={[
                      { id: 1, col1: "Treasury " },
                      { id: 2, col1: "Retail" },
                      { id: 3, col1: "Something" },
                      { id: 4, col1: "Else" },
                      { id: 5, col1: "Retail" },
                      // { id: 6, col1: "Retail" },
                    ]}
                    columns={[
                      {
                        field: "col1",
                        headerName: "Type Filters",
                        flex: 1,
                        headerAlign: "center",
                        align: "center",
                      },
                    ]}
                    hideFooter
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                    checkboxSelection
                    // slots={{
                    //   baseCheckbox: () => (
                    //     <Checkbox color="secondary" disableRipple />
                    //   ),
                    // }}
                  />
                </Paper>
              </Paper>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 500,
            mt: 3,
            background: `${colors.primary[cs]}`,

            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderColor: `${colors.blueAccent[800]} !important `,
            },
            "& .MuiDataGrid-cell:focus": {
              outline: "0px !important",
            },

            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[cs],
              border: `1px solid ${colors.blueAccent[800]}  !important`,
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
          }}
        >
          <DataGrid rows={rows} columns={columns} />
          <Box display="flex" alignSelf="flex-end">
            <ButtonGroup sx={{ m: 1, mt: 2 }}>
              <Button color="secondary" fullWidth variant="contained">
                Ok
              </Button>
              <Button color="error" fullWidth variant="contained">
                Cancle
              </Button>
            </ButtonGroup>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
