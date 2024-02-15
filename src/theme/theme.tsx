import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#219ebc", // Main primary color
      light: "#8ecae6", // Lighter shade for primary color
    },
    secondary: {
      main: "#fb8500", // Main secondary color
      light: "#ffb703", // Lighter shade for secondary color
    },
    error: {
      main: "#023047", // Using a custom color for error states
    },
    background: {
      default: "#f0f2f5", // A light background to complement your color scheme
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h1: {
      fontWeight: 600, // Bold weight for headings
    },
    button: {
      textTransform: "none", // Buttons text style
      fontWeight: 500,
    },
    // Add more customizations for other text variants as needed
  },
});

export default theme;
