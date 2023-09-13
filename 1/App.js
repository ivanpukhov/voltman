import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import ProductCatalog from "./Components/Catalog/Retail/ProductCatalog";
import Header from "./Components/Header/Header";
import WholesaleProductCatalog from "./Components/Catalog/Wholesale/WholesaleProductCatalog";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer"; // Подключите файл стилей, если необходимо


function App() {
    return (<BrowserRouter>
        <div className="App">
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/wholesale' element={<WholesaleProductCatalog/>}/>
                <Route path='/catalog' element={<ProductCatalog/>}/>
            </Routes>
            <Footer />
        </div>

    </BrowserRouter>);
}

export default App;
