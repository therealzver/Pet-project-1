import './styles/index.scss'
import React, {Suspense, useContext, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {UseTheme} from "./theme/UseTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    
    const { theme, toggleTheme } = UseTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;