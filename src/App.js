import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import {MovieInfoPage} from "./components/MovieInfo/MovieInfoPage";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={"movies"}/>}/>
                <Route path={"movies"} element={<MoviesPage/>}>
                    <Route path={":id"} element={<MovieInfoPage/>}/>
                </Route>

            </Route>
        </Routes>
    );
};

export default App;