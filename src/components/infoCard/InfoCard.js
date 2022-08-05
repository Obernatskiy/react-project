import React from 'react';
import {useLocation} from "react-router-dom";

const InfoCard = ({state}) => {

    return (
        <div>
            {JSON.stringify({state})}
        </div>
    );
};

export default InfoCard;