import {createTheme} from '@mui/material/styles'

export const lightTheme = createTheme({
    palette:{
        mode: 'light',
        primary:{
            main: '#1976d2',
        },
        secondary:{
            main: '#ec4899',
        },
        background:{
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text:{
            primary: '#000000',
            secondary: '#555555',
        },
    },
});

export const darkTheme = createTheme({
    palette:{
        mode: 'dark',
        primary:{
            main: '#ec4899',
        },
        secondary:{
            main: '#ffffff',
        },  
        background:{
            default: '#121212',
            paper: '#1f1f1f',
        },
        text:{
            primary: '#ffffff',
            secondary: '#aaaaaa',
        },
    },
});