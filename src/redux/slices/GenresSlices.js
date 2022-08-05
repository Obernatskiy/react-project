import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";


const initialState ={
    genres: [],
    error: null
}


const getAll = createAsyncThunk(
    'genresSlices/getAll',
    async (_, {rejectWithValue, dispatch, getState}) => {
        try {
            const {data} = await genresService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice({
    name: 'genresSlices',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.genres = action.payload.genres

            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })

});

const {reducer: genresReducer, actions: {}} = genreSlice;

const genresActions = {
    getAll
}

export {
    genresReducer,
    genresActions
}