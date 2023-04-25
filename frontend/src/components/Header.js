import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import "./Header.css"
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Grid from '@mui/material/Grid';
import SubHeader from './SubHeader';
import {useState} from "react"
import Modal from '@mui/material/Modal';

function Header(props){
    const [open, setOpen] = useState(false)
    function openModal(){
        setOpen(true)
    }

    function closeModal(){
        setOpen(false)
    }

    return(
    <header className="header">
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#313131' , height: '50%'}}>
                <Toolbar>
                
                    <Typography component="h2" style={{ width: '100px' }}>
                        <span className="xText">X</span> <span>Flix</span>
                    </Typography>
                
                        { props.showSearchBar === "true" ? (<div className="mysearchbox">
                        <input type="text" placeholder="Search..."/>
                        <button type="submit"><SearchIcon/></button>
                    </div>) : null}  
                    
                    {props.showButton === "true" ? (<Button variant="contained" id="upload-btn" onClick={openModal} startIcon={<FileUploadIcon />}>upload</Button>) : null} 

                    <Modal
                        open={open}
                        
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box>
                            <button id="upload-btn-submit">Submit</button>
                            <button id="upload-btn-cancel" onClick={closeModal}>Cancel</button>
                        </Box>
                    </Modal>  
                    
                    
                </Toolbar>
            </AppBar>
        { props.showSubHeader === "true" ?<SubHeader/> : null }
        </Box>
    </header>
    )

}
export default Header