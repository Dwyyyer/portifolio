import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "./styles/fonts.css"

let theme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#eaeaf0",
        },

        secondary: {
            //main: "#562e97ff",
            main: "#c80ec2ff",
        },

        background: {
            default: "#0f2027",
            paper: "#141e30",
        },

        text: {
            primary: "#ffffff",
            secondary: "#b5b5c3",
        },
    },

    typography: {
        fontFamily: "Roboto Mono"
    }
});

theme = responsiveFontSizes(theme);

export default theme;