import React, {Component } from 'react'

class Search extends Component{

    state = {artistsQuery: ''}

    handleKeyPress = event =>{
        if(event.key === 'Enter'){
            this.searchArtist(); 
        }
    }

    updateArtistQuery = event =>{
        this.setState({artistsQuery: event.target.value})
    }

    searchArtist = () =>{
        this.props.searchArtist(this.state.artistsQuery);
    }


    render(){
        return (
            
            <div>
                <input 
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.handleKeyPress} 
                    placeholder='Search for an Artist' />
                <button onClick={this.searchArtist}>Search</button>
            </div>


        )
    }
}

export default Search;