import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner'
import Home from './pages/Home/index'
import ErrorPage from './error-page';
import Error from './components/Error'
import Footer from './components/Footer/index';
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
              <Route path='/teste' element={<ErrorPage/>}/>
              <Route path='*' element={<Error/>}>
            </Route>
          </Routes>
          <Footer/>
    </Router>
  </React.StrictMode>
);


//OLD SYNTAXE
