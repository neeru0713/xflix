import Box from '@mui/material/Box';
function HorizontalList(props){
    return(
        
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width:'50%', color: 'white', marginLeft: '20%', marginTop: '1%'}}>

            
            <span className="defaultSelect">All Genre</span>
            <span>Education</span>
            <span>Sports</span>
            <span>Comedy</span>
            <span>Lifestyle</span>
        </Box>
    )
}

export default HorizontalList