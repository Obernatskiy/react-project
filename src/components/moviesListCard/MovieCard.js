import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {GenreMovie} from "../genreBadge/GenreMovie";
import {useNavigate} from "react-router-dom";


const MovieCard = ({movie}) => {
    const {original_title, vote_average, poster_path, genre_ids, id} = movie;

    const navigate = useNavigate;

    return (
        <div>

            <Card style={{ width: '18rem' }} onClick={() => navigate(`${id}`,{state:movie})}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                <Card.Body>
                    <Card.Title>{original_title}</Card.Title>
                    <Badge bg="secondary">{vote_average}</Badge>
                    <GenreMovie genre_ids={genre_ids}/>
                    <Button variant="primary">Watch movie</Button>
                </Card.Body>
            </Card>

            {/*<Card border="primary" style={{width: '18rem', margin: '5px'}} onClick={() => navigate(`${id}`,{state:movie})}>*/}
            {/*    <Card.Body>*/}
            {/*        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>*/}
            {/*        <Card.Title>{original_title} </Card.Title>*/}
            {/*        <Badge bg="secondary">{vote_average}</Badge>*/}
            {/*        <GenreMovie genre_ids={genre_ids}/>*/}
            {/*        <br/>*/}
            {/*            <Button variant="primary"  >Watch movie</Button>*/}
            {/*    </Card.Body>*/}
            {/*</Card>*/}
        </div>
    );
};

export {MovieCard};