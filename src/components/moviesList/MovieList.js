import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './List.module.css'
import {movieActions} from "../../redux/slices";
import {MovieCard} from "../moviesListCard/MovieCard";
import {useSearchParams} from "react-router-dom";
import {genresActions} from "../../redux/slices/GenresSlices";

const MovieList = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(movieActions.getAll({page:query.get('page')}))
    }, [dispatch, query])


    useEffect(() => {
        dispatch(genresActions.getAll())
    },[dispatch])

    const prevPage = () => {
        const page = +query.get('page')-1;
        setQuery({page: `${page}`})
    };


    const nextPage = () => {
        const page = +query.get('page')+1;
        setQuery({page: `${page}`})
    };

    return (
        <div className={css.list}>
            <div className={css.btn}>
                <button className={css.ntb} disabled={+query.get('page')<=1} onClick={prevPage}> Prev</button>
                <button className={css.ntb} disabled={+query.get('page')>=500} onClick={nextPage}> Next</button>
            </div>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieList};