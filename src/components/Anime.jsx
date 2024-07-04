import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

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
      placeholder='Ingrese el nombre del anime'
      margin='normal'
      />
      <Button variant='contained' color='primary' onClick={fetchAnime}>Buscar</Button>
      {
        loading && 
        <Typography>Cargando...</Typography>
      }
      
      {
      error && 
      <Typography>{error}</Typography>


      }
      {
        anime && 
        <div>
                    <Typography variant="h1" gutterBottom> Nombre: {anime.title}</Typography>
                    <Typography variant="h4" gutterBottom> Sinopsis : {anime.synopsis}</Typography>
                    <Typography variant="h6" gutterBottom>Estado {anime.status}</Typography>
                    </div>
           
      }



    </Container>
  )

}
export default Anime