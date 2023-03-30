import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, redirect, Link, Navigate } from "react-router-dom";
import Menu from "./Scenes/global/Menu";
import Context from "./Scenes/Context";
import Topbar from "./Scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { Box } from "@mui/system";
import LoginPage from "./Scenes/LoginPage";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main
            // style={{ display: "flex", flexDirection: "column" }}
            className="content"
          >
            <Topbar />
            <div style={{ display: "flex", height: "inherit" }}>
              <Menu />
              <Box sx={{ margin: "auto", mt: 3 }}>
                <Routes>
                  <Route exact path="/" element={<LoginPage />} />
                  <Route path="/context" element={<Context />} />
                </Routes>
              </Box>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
