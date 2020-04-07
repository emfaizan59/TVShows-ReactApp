import React from 'react';
import {Link } from 'react-router-dom';
import './Header.css'

class Header extends React.Component {

    state = {
        searchValue : ''
    }

    timeOut = null 

    doChange = (event) => {
        this.setState({ searchValue : event.target.value })
        clearTimeout(this.timeOut)

        this.timeOut = setTimeout(() => {
            this.props.callback(this.state.searchValue)
        },500
        )
    }

    render(){
    return(
        <div className={this.props.show ? "tvshow-header" : "tvshow-header-show"}>
            <Link to="/">
                 <img className="tvshow-header-dblogo" src="./images/tmdb_logo.png" />
                 </Link>
            {this.props.show ? 
                 <div className="search">
                      <input type="text" placeholder="Search TV Show" 
                        value={this.state.searchValue}
                        onChange = {this.doChange}
                      />
                 </div>
                 : null }
        </div>
    )
}
}


export default Header