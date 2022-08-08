import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../view/pages/home';
import Detail from '../view/pages/detail';
import Favorites from '../view/pages/favorites';

export default function GetRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/detail' element={<Detail />} />
        </Routes>
    );
}
