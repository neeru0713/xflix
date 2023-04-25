// import logo from './logo.svg';
import "./App.css"
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Home from "./components/Home"
import VideoPage from "./components/VideoPage";
// import {  Route, Switch } from "react-router";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/videos/:id">
          <VideoPage />
        </Route>
       
      </Switch>
    </div>
  </Router>
    
      // <Switch>
      // <Route exact path="/" component={Home} />
      // <Route exact path="/videos" component={VideoPage} />
      // </Switch>
   
  );
}

export default App;
