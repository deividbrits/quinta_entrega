import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

export const DataFinder = () => {
    const [data, setData] =useState(null)
    const [error, setError] = useState(null)
    const inputRef = useRef(null)


    const fetchData = async () => {
      const animeName = inputRef.current.value
      console.log(animeName)
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&sfw`)
        if (!response.ok) {
          throw new Error('No podemos encontrar este anime')
        }

        const dataGet = response.json()
        setData(dataGet)
      } catch (error) {
        setError(error.message)
        setData(null)
      }
    }
    console.log(data)
    console.log(error)  
  
  return (
    <Container>
      <Typography> Buscar Anime </Typography>
      <TextField inputRef={inputRef}
      fullWidth
      variant='outlined'
      placeholder='Ingrese el nombre del anime'
      margin='normal'
      />
      <Button variant='contained' color='primary' onClick={fetchData}>Buscar</Button>
      
      {
      error && 
      <Typography>{error}</Typography>


      }
      {
        data && 
        <div>
                    <Typography>{data.title}</Typography>
                    <Typography>{data.synopsis}</Typography>
                    <Typography>{data.status}</Typography>
                    </div>
           
      }



    </Container>
  )
}

export default DataFinder
