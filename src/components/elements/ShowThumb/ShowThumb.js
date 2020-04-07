import React from 'react';
import './ShowThumb.css'
import './meter.css'
import {Link} from 'react-router-dom'

const ShowThumb = (props) => {
    return(
 
      <div className="showthumb" 
      style = {{background : `linear-gradient(to bottom , rgba(0,0,0,0.7)
            39% , rgba(0,0,0,0.7)
            41%, rgba(0,0,0,0.7)
            100% , rgba(0,0,0,0.7) ), 
            url('${props.imageThumb}'), #1c1c1c `}}
      >
        
            <div>   

                <Link to={{pathname : `/${props.showId}` , showName : `${props.showname}`}}>
             <a style = {{ TextDecorationStyle : 'none', color:'transparent'}}>
              <div className="cont">
                  <h1>{props.showname}</h1>

                  <div class={`c100 p${props.rating*10}  met`} style={{cursor :  'pointer'}} >
                  <span>{props.rating * 10}%</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
                <p>Release Data</p>
                <p>{props.air_date}</p>
              
     
                  </div>
                  </a>
                  </Link>  
          <img  src={props.imageThumb} alt={props.showId}/>  
          </div>



        </div>

    )
}

export default ShowThumb