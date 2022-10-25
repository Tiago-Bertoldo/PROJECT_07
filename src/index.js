import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner'
import Home from './pages/Home/index'
import Error from './components/Error'
import Footer from './components/Footer/index';
import Propos from './pages/Propos';
import Logement from './pages/Logement';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
         <Banner/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/logement/:idNumber' element={<Logement/>}/>
              <Route path='/propos' element={<Propos/>}/>
              <Route path='*' element={<Error/>}>
            </Route>
          </Routes>
          <Footer/>
    </Router>
  </React.StrictMode>
);


//OLD SYNTAXE
