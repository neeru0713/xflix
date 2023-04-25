import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


function MainSection(){
    const host = "https://1e53c5d1-4ecc-42d4-822a-2468b6de2784.mock.pstmn.io"
    const [videos, setVideos] = useState([])
    useEffect(() => {
        axios.get(`${host}/v1/videos`)
          .then(response => {
            // console.log(response.data)
            setVideos(response.data.videos)
            console.log("videos : ", videos)
          })    
          .catch(error => {
            // Handle any errors
            console.log("error : ", error)
          });
      }, []);


    return (
        <Grid container clasName="video-tile-parent" spacing={6} sx={{background: 'black'}}>
            {videos.map((video) => (

                <Grid className="" item xs={3}>
                    <Box sx={{color: 'white'}}>
                        <Link to={`/videos/${video._id}`} class="video-tile-link">
                        <img className="video-tile" src={video.previewImage}/>
                        <p>{video.title}</p>
                        </Link>
                    </Box>
                    
                </Grid>
                
            ))}
           
        </Grid>
    )
}

export default MainSection