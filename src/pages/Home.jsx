
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../components/NavBar';
import { Anime } from '../components/Anime';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function Home() {
  

  return (
    
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <main>
          <NavBar />
             
             <Anime/>
          
          </main>
        </ThemeProvider>
      );
    }


export default Home; 