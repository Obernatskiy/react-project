import React from 'react';
import {MovieList} from "../../components";
import {Outlet} from "react-router-dom";

import css from './Page.module.css'

const MoviesPage = () => {
    return (
        <div className={css.page} >
            <MovieList/>
            <Outlet/>
        </div>
    );
};
export default MoviesPage;