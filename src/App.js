import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import ProductCatalog from "./Components/Catalog/Retail/ProductCatalog";
import Header from "./Components/Header/Header";
import WholesaleProductCatalog from "./Components/Catalog/Wholesale/WholesaleProductCatalog";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import {CartProvider} from "./CartContext";
import Cart from "./Components/Cart"; // Подключите файл стилей, если необходимо

export default App;


function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Cart/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/wholesale' element={<WholesaleProductCatalog/>}/>
                        <Route path='/catalog' element={<ProductCatalog/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </CartProvider>)
        ;
}
