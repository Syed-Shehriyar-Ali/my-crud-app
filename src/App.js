import Header from './Components/Header/index.jsx'
import './App.css';
import {
  BrowserRouter as Router,

  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/index.jsx'
import Add from './Components/Add/index.jsx'
import Edit from './Components/Edit/index.jsx'


function App() {
  return (
    <>
    <Header/>
          <Router>  
                <Routes>
                      <Route path="/" element={ <Home />}/>
                       
                      
                      <Route path="/Add" element={ <Add />}/>
                        
                    
                      <Route path="/Edit"  element={ <Edit />}/>
                        
                    
                </Routes>
          </Router>
    </>

  );
}

export default App;
