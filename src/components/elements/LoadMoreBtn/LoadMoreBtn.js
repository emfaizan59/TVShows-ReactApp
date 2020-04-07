import React from 'react';
import './LoadMoreBtn.css'


const LoadMoreBtn = (props) => {
    return(
      
      <div className="LoadMoreBtn" onClick={props.onClick}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default LoadMoreBtn