import React from 'react'
import './Actors.css'
import { IMAGE_URL } from '../../../api_config';

const Actors = (props) => {

    const POSTER_SIZE = "w154";
    return(
     <div className="rmdb-actor">
         <img src = {props.actor.profile_path ? `${IMAGE_URL}${POSTER_SIZE}${props.actor.profile_path}` : './images/no_image.jpg'} />
         <span className="rmdb-actor-character">{props.actor.character}</span>
    <span className="rmdb-actor-name">{props.actor.name}</span>
     </div>   
    )

}


export default Actors