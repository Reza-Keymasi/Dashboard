import { createTheme } from "@mui/material";

const theme = createTheme({
  direction:"rtl",
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // fontWeightHeavy: 800,
    // fontWeightFat: 900,
  },
  palette:{
    primary:{
      main:"#1976d2",
      light: "#fdebec",
      dark:"#272c85"
    },
    text: {
        primary:"#272c85",
    },
}
    
});

export default theme