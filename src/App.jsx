import { Route, Routes } from "react-router-dom";
import { Typography, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeCotext, useMode } from "../src/mui/theme";
import AppBar from "../src/scenes/global/AppBar";
import Dashboard from "../src/scenes/dashboard/Dashboard";
import SideBar from "../src/scenes/global/SideBar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeCotext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <SideBar />
          <main className="content">
            <CssBaseline />
            <AppBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeCotext.Provider>
  );
}

export default App;
