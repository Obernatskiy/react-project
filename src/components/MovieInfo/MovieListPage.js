
import React from "react";
import {useLocation} from "react-router-dom";
import InfoCard from "../infoCard/InfoCard";

const MovieListPage = () => {
    const {state} = useLocation();
    return (
        <div>
            <InfoCard state={state}/>
        </div>
    );
};

export default MovieListPage;
