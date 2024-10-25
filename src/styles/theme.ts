import { createTheme } from "@mui/material";

// Create the base theme with light mode and extend later
let theme = createTheme({
    palette: {
        mode: 'light', // Switch between 'light' and 'dark'
        primary: {
            main: '#0052cc',  // Main primary color
            light: '#00a3ff', // Lighter shade of primary
            dark: '#003c99',  // Darker shade of primary
            contrastText: '#ffffff', // Text color on primary
        },
        secondary: {
            main: '#edf2ff',  // Secondary color
            light: '#ffffff', // Lighter shade of secondary
            dark: '#bbdefb',  // Darker shade of secondary
            contrastText: '#000000', // Text color on secondary
        },
        error: {
            main: '#d32f2f',  // Error color
            light: '#ff6659', // Light error
            dark: '#9a0007',  // Dark error
            contrastText: '#ffffff', // Text on error color
        },
        warning: {
            main: '#ffa000', // Warning color
            light: '#ffd149', // Light warning
            dark: '#c67100', // Dark warning
            contrastText: '#000000', // Text on warning
        },
        info: {
            main: '#0288d1',  // Info color
            light: '#5eb8ff', // Light info
            dark: '#005b9f',  // Dark info
            contrastText: '#ffffff', // Text on info
        },
        success: {
            main: '#388e3c',  // Success color
            light: '#6abf69', // Light success
            dark: '#00600f',  // Dark success
            contrastText: '#ffffff', // Text on success
        },
        background: {
            default: '#1A1A1A', // Default background for the light theme
            paper: '#2B2B2B',   // Background for cards, dialogs, etc.
        },
        text: {
            primary: '#333333',  // Main text color
            secondary: '#555555', // Secondary text color
            disabled: '#aaaaaa', // Disabled text color
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Default font family
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.75,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',  // Prevents uppercase text in buttons
        },
    },
    spacing: 8, // Default spacing unit is 8px
    shape: {
        borderRadius: 4, // Default border radius for components
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    shadows: Array(25).fill(''),
});

// Extend the theme by adding custom overrides
// theme = createTheme(theme, {
//     palette: {
//         darkMode: {
//             primary: {
//                 main: '#90caf9',
//                 light: '#e3f2fd',
//                 dark: '#42a5f5',
//                 contrastText: '#000000',
//             },
//             background: {
//                 default: '#121212',
//                 paper: '#1d1d1d',
//             },
//             text: {
//                 primary: '#ffffff',
//                 secondary: '#aaaaaa',
//             },
//         },
//     },
//     components: {
//         MuiButton: {
//             styleOverrides: {
//                 root: {
//                     borderRadius: 16,  // Rounded buttons
//                     padding: theme.spacing(1, 3),  // Custom padding
//                 },
//                 containedPrimary: {
//                     backgroundColor: theme.palette.primary.main,
//                     color: theme.palette.primary.contrastText,
//                     '&:hover': {
//                         backgroundColor: theme.palette.primary.dark,
//                     },
//                 },
//             },
//         },
//         MuiCard: {
//             styleOverrides: {
//                 root: {
//                     borderRadius: 12, // Rounded corners for cards
//                     boxShadow: theme.shadows[5], // Custom shadow
//                 },
//             },
//         },
//         MuiTypography: {
//             styleOverrides: {
//                 h1: {
//                     color: theme.palette.text.primary,
//                 },
//                 body1: {
//                     color: theme.palette.text.secondary,
//                 },
//             },
//         },
//     },
// });

export { theme };
