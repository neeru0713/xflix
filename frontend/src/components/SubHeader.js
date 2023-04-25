import Box from '@mui/material/Box';

function SubHeader(props){
    return(
    <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width:'50%', color: 'white', marginLeft: '20%', marginTop: '1%'}}>
                
                <span className="defaultSelect genre-btn">All Genre</span>
                <span className="genre-btn">Education</span>
                <span className="genre-btn">Sports</span>
                <span className="genre-btn">Comedy</span>
                <span className="genre-btn">Lifestyle</span>

                <select className="sort-select" placeholder="Sort By: Uploaded Date">
                    <option id="view-count-option">View Count</option>
                    <option selected id="release-date-option">Release date</option>
                    <option >Sort By: Uploaded date </option>
                </select>
                
            </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width:'50%', color: 'white', marginLeft: '20%', marginTop: '1%'}}>
            
            <span className="defaultSelect content-rating-btn">Any Age Group</span>
            <span className='content-rating-btn'>7+</span>
            <span className='content-rating-btn'>12+</span>
            <span className='content-rating-btn'>16+</span>
            <span className='content-rating-btn'>18+</span>
            
        </Box>
        </Box>
    )
}

export default SubHeader