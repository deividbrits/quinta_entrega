import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const User = () => {
    const [user, setUser] = useState (null);
    const [loading, setLoading] =useState  (true);

    useEffect ( () =>{
        setLoading (true)
        fetch('https://api.jikan.moe/v4/anime?q=naruto&sfw')
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0])
            setUser(data.data[0])
            setLoading (false)
    })
    .catch (err => {
        console.log(err)
        setLoading (false)
    })
    }, [] )
  return (

    <div>
        {loading && <p> cargando datos....</p>}
        {
            user && (
                <div>
                    <p>{user.title}</p>
                    <p>{user.synopsis}</p>
                    <p>{user.status}</p>
                    <aside> <img src={user.images.jpg.image_url} /> </aside>

                    
                    
                     </div>
            )
        }
    </div>
  )
}
