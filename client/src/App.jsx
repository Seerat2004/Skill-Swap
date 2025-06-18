import {useMemo,useState} from 'react';
import {ThemeProvider,CssBaseline} from '@mui/material';
import { lightTheme, darkTheme } from './themes/theme';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
const [darkMode,setDarkMode] =useState(false);
const theme = useMemo(()=>(darkMode ? darkTheme:lightTheme),[darkMode]);

const toggleTheme = () =>{
  setDarkMode(!darkMode);
};

return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
    <HomePage toggleTheme={toggleTheme} darkMode={darkMode} />
  </ThemeProvider>
);
}

export default App;
