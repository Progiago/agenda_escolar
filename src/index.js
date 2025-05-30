import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Alunos from './pages/Alunos/Alunos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Alunos' element={<Alunos/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
