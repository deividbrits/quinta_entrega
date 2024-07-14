
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Anime } from '../components/Anime';
import Header from '../components/Header';

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
             <Header />
             <Anime/>
          
          </main>
        </ThemeProvider>
      );
    }


export default Home; 