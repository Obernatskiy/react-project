import { useSelector} from "react-redux";
import React from 'react';

import Badge from "react-bootstrap/Badge";

const GenreMovie = ({genre_ids}) => {

    const {genres} = useSelector(state => state.genres);

    const genreOfMovie = genres.reduce((acc, genre) => {
        for (const genreId in genre_ids) {
            if (genre.id === genreId) {
                acc.push(genre)
            }
        }
            return acc
    }, [])

    return (
        <div>
            {genreOfMovie.map(value => <Badge bg="secondary" key={value.id}> {value.name} </Badge>)}
        </div>
    );
};

export {GenreMovie};
