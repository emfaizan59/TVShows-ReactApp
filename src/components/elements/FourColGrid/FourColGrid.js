import React from 'react';
import './FourColGrid.css'

const FourColGrid = (props) => {

  const  renderElement =() => 
    {
        const gridElement = props.children.map( (element, i) => (
        <div key={i} className="fourcolgrid-element">{element}</div>
        ))

        return gridElement
    }
    return(
        <div className="fourcolgrid">
        {props.header && !props.loading ? <h1>{props.header}</h1> : null}  
             <div className="fourcolgrid-grid">
                 {
                 renderElement()
                 }

             </div>
        </div>
    )

}

export default FourColGrid