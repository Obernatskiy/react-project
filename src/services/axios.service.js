import axios from "axios";
import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjk4ODQ4MDI3MmZkMzg2NDVmMDFlNmFjN2QzOWUwMSIsInN1YiI6IjYyZTY2OWM3MWJmMjY2MDA1ZGEzNTNkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hWtmCiUkEo59WYMxz_6rYRavlSnwtseyM2eoYR4VmPg';
    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

export {axiosService}