import React, { useCallback, useEffect, useRef, useState } from "react";
import ButtonHeader from "../../components/ButtonHeader";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
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
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { Search, SearchOffOutlined } from "@mui/icons-material";
import { redirect, useNavigate } from "react-router-dom";
const filterRows = [
  { id: 1, col1: "Treasury " },
  { id: 2, col1: "Retail" },
];
const rows = [
  {
    id: 1,
    col1: "11223310",
    col2: "Open",
    col3: "NI - Treasury Reserve",
    col4: "A",
    col5: "30 Floyle Crescent",
  },
  {
    id: 2,
    col1: "11223310",
    col2: "Close",
    col3: "NI - Treasury Reserve",
    col4: "B",
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
    col1: "9",
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
    col4: "Hello",
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
    col4: "TJ Bob",
    col5: "30 Floyle Crescent",
  },
  {
    id: 10,
    col1: "01223310",
    col2: "Open",
    col3: "NI - Treasury Reserve",
    col4: "PJ",
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

export const StyledTextBox = ({
  label,
  full = false,
  style,
  disabled = false,
  textValues,
  setTextValues,
  row = 0,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  if (row > 0) {
    return (
      <TextField
        value={textValues[label]}
        onChange={(e) => {
          setTextValues({ ...textValues, [label]: e.target.value });
        }}
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
        disabled={disabled}
        fullWidth={full}
        id="outlined-basic"
        label={label}
        variant="outlined"
        size="small"
        multiline
        rows={row}
      />
    );
  } else {
    return (
      <TextField
        value={textValues[label]}
        onChange={(e) => {
          setTextValues({ ...textValues, [label]: e.target.value });
        }}
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
        disabled={disabled}
        fullWidth={full}
        id="outlined-basic"
        label={label}
        variant="outlined"
        size="small"
      />
    );
  }
};
export default function CustomerSelection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const cs = 500;

  const [values, setValues] = useState({
    Closed: false,
    Live: false,
    rowSelectionModel: [],
  });
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [textValues, setTextValues] = useState({
    "Market A/C No": "",
    "Customer Name": "",
  });
  const [filteredRow, setFilteredRow] = useState([]);

  const filterArray = () => {
    const fRow = [...rows];
    console.log(fRow, textValues["Customer Name"]);

    const nrow = fRow
      .filter((item) => {
        return item.col4.includes(textValues["Customer Name"]);
      })
      .filter((item) => {
        return item.col1.includes(textValues["Market A/C No"]);
      });

    setFilteredRow(nrow);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Paper
          elevation={3}
          sx={{
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
          <h1>Customer Selection </h1>

          <Box
            display={"flex"}
            sx={{ mb: 2, pl: 1, pr: 1 }}
            flexDirection="column"
            alignItems="center"
          >
            <Box display="flex">
              <Box>
                <Box display="flex">
                  <StyledTextBox
                    label={"Market A/C No"}
                    style={{ m: 1 }}
                    textValues={textValues}
                    setTextValues={setTextValues}
                    full={true}
                  />
                  <StyledTextBox
                    label={"Customer Name"}
                    style={{ m: 1 }}
                    full={true}
                    textValues={textValues}
                    setTextValues={setTextValues}
                  />
                </Box>

                <Box display="flex">
                  <StyledTextBox
                    label={"Wall Street Key"}
                    style={{ m: 1 }}
                    full={true}
                    disabled
                    textValues={textValues}
                    setTextValues={setTextValues}
                  />
                  <StyledTextBox
                    disabled
                    label={"CIN"}
                    style={{ m: 1 }}
                    full={true}
                    textValues={textValues}
                    setTextValues={setTextValues}
                  />
                </Box>

                <Box display="flex">
                  <StyledTextBox
                    label={"Sort Code"}
                    style={{ m: 1 }}
                    full={true}
                    disabled
                    textValues={textValues}
                    setTextValues={setTextValues}
                  />
                  <StyledTextBox
                    label={"Account Number"}
                    style={{ m: 1 }}
                    full={true}
                    disabled
                    textValues={textValues}
                    setTextValues={setTextValues}
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
                    density="compact"
                    rows={filterRows}
                    onRowSelectionModelChange={(newRowSelectionModel) => {
                      setValues({
                        ...values,
                        rowSelectionModel: newRowSelectionModel,
                      });
                    }}
                    rowSelectionModel={values.rowSelectionModel}
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
                    checkboxSelection
                  />
                </Paper>
                <Box
                  sx={{ ml: 3, mr: 3 }}
                  display={"flex"}
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Typography id="demo-row-radio-buttons-group-label">
                    State Filter
                  </Typography>

                  <Divider flexItem sx={{ mb: "1px", mt: "3px" }} />
                  <FormGroup>
                    <FormControlLabel
                      value="Live"
                      control={<Checkbox color="secondary" />}
                      label="Live"
                      checked={values.Live}
                      onChange={(e) => {
                        setValues({ ...values, Live: e.target.checked });
                      }}
                    />
                    <FormControlLabel
                      value="Closed"
                      control={<Checkbox color="secondary" />}
                      label="Closed"
                      checked={values.Closed}
                      onChange={(e) => {
                        setValues({ ...values, Closed: e.target.checked });
                      }}
                    />
                  </FormGroup>
                  <Divider flexItem sx={{ mb: "14px", mt: "1px" }} />
                  <Button
                    // sx={{ alignSelf: "flex-end" }}
                    size="small"
                    color="secondary"
                    variant="outlined"
                    onClick={() => {
                      filterArray();
                    }}
                    startIcon={<Search />}
                  >
                    Search
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            // height: 500,
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
          <DataGrid
            autoHeight
            density="compact"
            rows={filteredRow}
            columns={columns}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
          />
          <Box display="flex" alignSelf="flex-end">
            <ButtonGroup sx={{ m: 1, mt: 2 }}>
              <Button
                disabled={!rowSelectionModel.length}
                onClick={() => {
                  navigate("/newdealstructure");
                  console.log(rowSelectionModel);
                }}
                color="secondary"
                fullWidth
                variant="contained"
              >
                Ok
              </Button>
              <Button
                disabled={!filteredRow.length}
                onClick={() => {
                  setFilteredRow([]);
                  setTextValues({
                    "Market A/C No": "",
                    "Customer Name": "",
                  });
                  setValues({
                    Closed: false,
                    Live: false,
                    rowSelectionModel: [],
                  });
                }}
                color="error"
                fullWidth
                variant="contained"
              >
                Cancle
              </Button>
            </ButtonGroup>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
