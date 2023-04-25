import { Typography } from "@mui/material"
import MainSection from "./MainSection"
import "./VideoPage.css"
import Button from '@mui/material/Button';
import Header from "./Header"
import {useState, useEffect} from "react"
import axios from "axios";
import Box from '@mui/material/Box';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


function VideoPage(props){
    const [videoDetails, setVideoDetails] = useState({})

    useEffect(()=>{
        let id = window.location.href.split("/")[4];
        let host = "https://1e53c5d1-4ecc-42d4-822a-2468b6de2784.mock.pstmn.io"

        let url=`${host}/v1/videos/${id}`
        axios.get(url)
        .then((res) => {
            console.log("video details : ", res.data)
            setVideoDetails(res.data)
        })
        .catch(err => {
            console.log("vide details call error : ", err)
        })

        url=`${host}/v1/videos/${id}/views`

        axios.patch(url, {})
        .then((res) => {
            
           
        })
        .catch(err => {
            
        })




    }, [])

    function upVote(event){
        console.log(event.target)
        let host = "https://1e53c5d1-4ecc-42d4-822a-2468b6de2784.mock.pstmn.io"
        let id = window.location.href.split("/")[4];
        let url=`${host}/v1/videos/${id}/votes`

        let data = {
            vote: "upVote",
            change: "increase"
        }
        
        axios.patch(url, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    function downVote(event){
        console.log(event.target)
        let host = "https://1e53c5d1-4ecc-42d4-822a-2468b6de2784.mock.pstmn.io"
        let id = window.location.href.split("/")[4];
        let url=`${host}/v1/videos/${id}/votes`

        let data = {
            vote: "downVote",
            change: "increase"
        }
        
        axios.patch(url, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    return (
        <div>
            <Header showSubHeader="false" showSearchBar="false" showButton="false"></Header>
            <iframe  src={videoDetails.previewImage} className="videoTile iframe-parent"/>
            
            <div className="videofooter">

                <Box className="title">
                    <Typography>
                    <p>{videoDetails.title}</p>
                    </Typography>
                    <span>+12  . {videoDetails.releaseDate}</span>
                </Box>

                <Box className="voteButtons">
                    <Button variant="contained" startIcon={<ThumbUpAltIcon />} onClick={upVote}>
                    {videoDetails?.votes?.upVotes}
                    </Button>

                    <Button variant="contained" startIcon={<ThumbDownIcon />} onClick={downVote}>
                    {videoDetails?.votes?.downVotes}
                    </Button>
               </Box>

            </div>
            <MainSection/>
        </div>
    )
}

export default VideoPage