import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import EuchrePage from './Games/Euchre/EuchrePage';
import NavBar from './Pages/NavBar';
import ChessPage from './Games/Chess/ChessPage';
import HomePage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';
import HistoryPage from './Pages/HistoryPage';
import ProjectPage from './Pages/ProjectPage';
import OtherPage from './Pages/OtherPage';


function App() {
  return (
    <div>
      <Router>
          <NavBar/>
          <Route path="/" exact component ={HomePage}/>
          <Route path="/home" component ={HomePage}/>
          <Route path="/resume" component ={ResumePage}/>
          <Route path="/history" component ={HistoryPage}/>
          <Route path="/projects" component ={ProjectPage}/>
          <Route path="/other" component ={OtherPage}/>
          <Route path="/chess" component ={ChessPage}/>
          <Route path="/euchre" component ={EuchrePage}/>
      </Router>
      
    </div>
  );
}

export default App; 
