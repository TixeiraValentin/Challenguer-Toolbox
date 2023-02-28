import React from 'react';
import NavigationBar from './Component/NavBar/Navbar';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Table from './Pages/Table/Table';


export default function Rutas() {

  return (
    <>  
       
        <BrowserRouter>
            <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Table/>} />
                </Routes>
        </BrowserRouter>

    </>

  )
}
