import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export const Anime = () => {
    const [anime, setAnime] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const inputRef = useRef(null)
    

    const fetchAnime = async () => {
        const animeName = inputRef.current.value
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&sfw`)
        if (!response.ok) {
          throw new Error('no podemos encontrar este anime')
        }
        const data = await response.json()
        setAnime(data.data[0])
        console.log(data.data[0])
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setAnime(null)
        setLoading(false)
      }

    }


  return (
    <Container>
      <Typography> Buscar Anime </Typography>
      <TextField inputRef={inputRef}
      fullWidth
      variant='outlined'
      placeholder='Escribe por ejemplo, Konosuba'
      margin='normal'
      />
      <Button variant='contained' color='primary' onClick={fetchAnime}>Buscar</Button>
      {
        !loading && 
        <Typography>Cargando...</Typography>
      }
      
      {
      error && 
      <Typography>{error}</Typography>


      }
      {
        anime && 

        <Card sx={{ maxWidth: 'lg' }}>
      <CardMedia
        component="img"
        height="600"
        image={anime.images.jpg.large_image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {anime.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {anime.synopsis}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={ () => {window.open(anime.trailer.url)}} > Trailer</Button>
        <Button size="small"onClick={ () => {window.open(anime.url)}} >Mas Informacion</Button>
      </CardActions>
    </Card>
}
    </Container>
  )
}