import { Typography, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeCotext, useMode } from "../src/mui/theme";
import AppBar from "../src/scenes/global/AppBar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeCotext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <main className="content">
            <CssBaseline />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeCotext.Provider>
  );
}

export default App;
