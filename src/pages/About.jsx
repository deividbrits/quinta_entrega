import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppGrid from '../components/AppGrid';
import NavBar from '../components/NavBar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <main>
  <NavBar/>
    
      <AppGrid/>
      </main>
        </ThemeProvider>
      );
    }    
  


export default About;