import { createTheme, ThemeProvider } from "@mui/material/styles";

const colorBackground = createTheme({
  background: {
    primary: {
      // Purple and green play nicely together.
      main: "#e0e0e0",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#424242",
    },
  },
});

export default colorBackground;
