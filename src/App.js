import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom';

import ProductCatalog from "./Components/Catalog/Retail/ProductCatalog";
import Header from "./Components/Header/Header";
import WholesaleProductCatalog from "./Components/Catalog/Wholesale/WholesaleProductCatalog";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import {CartProvider} from "./CartContext";
import Cart from "./Components/Cart";
import Login from './Components/Login';
import {AuthProvider, useAuth} from './AuthContext';
import {Register} from "./Components/Register";
import Orders from "./Components/Orders";
import Consolt from "./Components/Consult";
import Order from "./Components/Order";
export default function App() {
    return (<AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    <div className="App">
                        <Header/>
                        <Cart/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/wholesale' element={<WholesaleProductCatalog/>}/>
                            <Route path='/catalog' element={<ProductCatalog/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/register' element={<Register/>}/>
                            <Route path='/orders' element={<Orders/>}/>
                            <Route path="/order/:id" component={Order} />

                        </Routes>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>);
}

