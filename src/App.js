import React from 'react'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Route from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
   <Router>
     <Route></Route>
   </Router>
  );
}

export default App;
