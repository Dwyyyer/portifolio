import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "./styles/fonts.css"

let theme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#056361",
        },

        secondary: {
            // main: "#562e97ff",
            main: "#61c0bf",
        },

        background: {
            default: "#000",
            paper: "transparent",
        },

        text: {
            primary: "#ffffff",
            secondary: "#000",
        },
    },

    typography: {
        fontFamily: "Roboto Mono"
    },

    shape: {
        borderRadius: "3rem",
    },
});

theme = responsiveFontSizes(theme);

export default theme;
