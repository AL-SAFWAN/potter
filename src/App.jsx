import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, redirect, Link, Navigate } from "react-router-dom";
import Menu from "./Scenes/global/Menu";
import CustomerSelection from "./Scenes/CustomerSelection";
import Topbar from "./Scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { Box } from "@mui/system";
import NewDealStructure from "./Scenes/NewDealStructure";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <CssBaseline />
          <div className="app">
            <main
              // style={{ display: "flex", flexDirection: "column" }}
              className="content"
            >
              <Topbar />
              <div style={{ display: "flex", height: "inherit" }}>
                <Menu />
                <Box
                  sx={{
                    m: 3,
                    width: "-webkit-fill-available",
                  }}
                >
                  <Routes>
                    {/* <Route exact path="/" element={<LoginPage />} /> */}
                    <Route
                      path="/customerselection"
                      element={<CustomerSelection />}
                    />
                    <Route
                      path="/newdealstructure"
                      element={<NewDealStructure />}
                    />
                  </Routes>
                </Box>
              </div>
            </main>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
