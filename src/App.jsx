import { Route, Routes } from "react-router-dom";
import { Typography, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeCotext, useMode } from "../src/mui/theme";
import AppBar from "../src/scenes/global/AppBar";
import Dashboard from "../src/scenes/dashboard/Dashboard";
import SideBar from "../src/scenes/global/SideBar";
import Team from "../src/scenes/team/Team";
import Contacts from "../src/scenes/contacts/Contacts";

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
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeCotext.Provider>
  );
}

export default App;
