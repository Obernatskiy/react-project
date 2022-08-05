import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";
import {genresReducer} from "./slices/GenresSlices";


const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genresReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}