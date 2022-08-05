import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,

};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue, dispatch, getState}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);



const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.movies = action.payload.results

            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })

});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieReducer,
    movieActions
}