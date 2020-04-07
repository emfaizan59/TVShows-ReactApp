import React from 'react'
import './tvinfo.css'
import './meter.css'
import { IMAGE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../../api_config'

const TVshowHeader = (props) => {
    return(
        <div  className ="tvinfo-title" style={{ background : props.tvinfo ? `linear-gradient(to bottom , rgba(0,0,0,0.6)
        39% , rgba(0,0,0,0.6)
        41%, rgba(0,0,0,0.6)
        100% , rgba(0,0,0,0.6) ),url('${IMAGE_URL}${BACKDROP_SIZE}${props.tvinfo.backdrop_path}')` : '#ffffff'}} >


-
        <div className="tvinfo-content">

        <div className="tvinfo-thumb"
        style = {{ background : props.tvinfo ? `url('${IMAGE_URL}${POSTER_SIZE}${props.tvinfo.poster_path}')` : './images/no_image.jpg'}}
        >
        </div>
        {props.tvinfo ? 
        
        <div className="tvinfo-desc">
        
         <h1>{props.tvinfo.original_name}

{props.tvinfo.seasons.map( (element , i ) => {
          return <span style={{color : '#A9A9A9'}} key={i} >{props.tvinfo.seasons.length-1 == i ? `(${element.air_date.substring(0,4)})` : null }</span>
      })}

         </h1>
    
         <p style={{fontWeight : 'bold'}}>Overview</p>
        <p>{props.tvinfo.overview}</p>
    
    <div className="rating">
        <div className="left-rat">
        <p>IMDB Ratings</p>
        </div>
        <div class={`c100 p${props.tvinfo.vote_average*10} small  met right-rat`}  >
                  <span>{props.tvinfo.vote_average*10}%</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
</div>

            <div>
                


            </div>

         </div>
: null }
        
        </div>

        </div>

    )

}

export default TVshowHeader