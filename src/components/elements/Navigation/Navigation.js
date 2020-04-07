import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'
const Navigation = (props) => {
    return(

        <div className="nav-bar">
          <Link to="/"> 
                 <a>Home</a>
           </Link>
           <h1>/</h1>
           <h1>{props.showname}</h1>
        </div>

    )
}

export default Navigation