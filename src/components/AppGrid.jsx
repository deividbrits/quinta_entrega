import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import grilla1 from '../assets/anime1.jpg'
import logo from '../assets/Malogo.jpg'
import grilla2 from '../assets/anime2.jpg'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AppGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item sx={{backgroundColor : "#000000"}}> <img src={grilla1}/> </Item>
          <Typography variant='h1'>Esta Pagina , es un proyecto del Bootcamp de Desarrollo Web Full Stack de la Universidad del Desarrollo , en el cual se solicitó realizar la tecnologia REACT, la cual debe consumir una API Pública. </Typography>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{backgroundColor : "#000000"}} ><img src={grilla2}/> </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{backgroundColor : "#000000"}}><img src={logo}/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item sx={{backgroundColor : "#000000"}}> <Typography variant='h2' sx ={{backgroundColor : "#363f8e"}}>Para fines de este proyecto , y por gustos propios del autor , se consumio la API Jikan , autodenominada como la API no oficial de la popular pagina web MyAnimelist </Typography> </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
