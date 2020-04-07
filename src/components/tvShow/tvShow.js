import React from 'react'
import './tvShow.css'
import Header from '../elements/Header/Header'
import { API_URL, API_KEY } from '../../api_config'
import TVshowHeader from '../elements/TVshowHeader/TVshowHeader'
import Spinner from '../elements/Spinner/Spinner'
import Navigation from '../elements/Navigation/Navigation'
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import Actors from '../elements/Actors/Actors'


class tvShow extends React.Component {
    state = {
        heroImage : null ,
        
        loading : true,
        tvshow : null,
        tv_actors : null
    }

    componentDidMount = () => {
        this.setState({loading : false})
        let endpoint = `${API_URL}tv/${this.props.match.params.showId}?api_key=${API_KEY}&language=en-US`
        this.fetchItems(endpoint)
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState({
                heroImage : result ,
                tvshow : result.original_name                 
            } , () => {
             
              const  endpoint = `${API_URL}tv/${this.props.match.params.showId}/credits?api_key=${API_KEY}&language=en-US`
                fetch(endpoint)
                .then( result => result.json())
                .then( result => {
                    this.setState({tv_actors : result.cast})
                    console.log(this.state.tv_actors)
                })
            })
 
        })
    }

    render(){
        return(
            <div>
            <Header show = {false}/>
            <Navigation showname = {this.state.tvshow} />
            <TVshowHeader tvinfo = {this.state.heroImage}  />
           <div style={{boxSizing : 'border-box' , padding : '20px'}}>
            {this.state.tv_actors ?
            <div className="rmdb-image-grid">
            <FourColGrid header = "TV-Show Actors" >
             
            {this.state.tv_actors.map( (element,i) => {
             return   <Actors key={i} actor = {element} />
            })}
                </FourColGrid>
                </div>
            : null }
            </div>
              {this.state.tv_actors ?  null : <Spinner/> } 
            </div>
        )
    }
}

export default tvShow