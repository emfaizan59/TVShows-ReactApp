import React, {Component} from 'react';
import './Home.css'
import HeroImage from '../elements/HeroImage/HeroImage'
import Spinner from '../elements/Spinner/Spinner';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn'
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import ShowThumb from '../elements/ShowThumb/ShowThumb';

import {API_KEY, API_URL, IMAGE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../api_config'
import Header from '../elements/Header/Header';
var count = 0;
class Home extends Component {
    state = {
        tvshow : [], 
        HeroImage : null, 
        loading : true, 
        totalPage : null ,
        currentPage : null ,
        searchTerm : ''
    }

    componentDidMount(){
        this.setState({loading: false})
        const endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`
        this.fetchItem(endpoint)
    }

    searchItems= (searchTerm) => {
        console.log(searchTerm)
      let endpoint = ''

        this.setState({
            tvshow : [], 
            loading : true, 
            searchTerm : searchTerm
        })

        if(searchTerm === '')
        {
            endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`
        }
        else
        {
            endpoint =  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
            // endpoint =  `https://api.themoviedb.org/3/search/tv?api_key=c9042c4910e404306c87d3c5968bde53&language=en-US&query=stranger`;
        }
        this.fetchItem(endpoint)
    }
  
    loadMoreBtn = () =>
    {
        this.setState({loading:true})
        let endpoint = ''
        if(this.state.searchTerm === '')
        endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        else
        endpoint =  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage+1}`;
        this.fetchItem(endpoint)
    }
    fetchItem(endpoint)
    {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            console.log(result)
            count = result.results.length
            console.log(count)
            var  ran = Math.floor((Math.random() * count) + 0);
            this.setState({
                tvshow : [...this.state.tvshow, ...result.results] ,
                HeroImage : this.state.HeroImage || result.results[ran],
                totalPage : result.total_pages,
                currentPage : result.page,
                loading: false
            })
        //    console.log(this.state.tvshow)
        })
    }

    render(){
        return(
            <div>
                <Header show={true} callback ={this.searchItems}/>
              {this.state.HeroImage ?  
            <HeroImage 
               title = {this.state.HeroImage.name}
               desc = {this.state.HeroImage.overview}
               image = {`${IMAGE_URL}${BACKDROP_SIZE}${this.state.HeroImage.backdrop_path}`}
            />
            : null }
            <div className="rmdb-home-grid">
            <FourColGrid header={this.state.searchTerm ? 'Search Results' :'Popular TV Shows' } loading = {this.state.loading}>
             {this.state.tvshow.map( (element,i) => (
                <ShowThumb
                    key = {i}
                    clickable = {true}
                    imageThumb = {element.poster_path ? `${IMAGE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                    showId = {element.id}
                    showname = {element.name}x
                    last_ep_date = {element.last_air_date}
                    // ep_num = {element.last_episode_to_air.episode_number}
                    // genre = {element.genres.name}
                    air_date = {element.first_air_date}
                    rating = {element.vote_average}
                    ep_num = {element.number_of_episodes}
                    season_num = {element.number_of_seasons}
             />
             ))}
                
            </FourColGrid>
            </div>
                {this.state.loading ? <Spinner /> : null}
                {this.state.currentPage < this.state.totalPage ? <LoadMoreBtn text= 'Load More' onClick={this.loadMoreBtn}/> : null}
       
            </div>
        )
    }
}

export default Home;