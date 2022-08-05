import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService ={
    getAll:(page=1)=>axiosService.get(urls.movies, {params:{page}})
}
const genresService ={
    getAll:()=>axiosService.get(urls.genres)
}



export {movieService, genresService};