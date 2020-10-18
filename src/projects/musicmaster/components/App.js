import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search'

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component{
    
    state = {artist: null, tracks: []};


    componentDidMount(){
        this.searchArtist('pentatonix');
    }
 
    

    searchArtist = artistQuery =>{

        fetch(`${API_ADDRESS}/artist/${artistQuery}`).then(response=>{
            return response.json();
        }).then(json=>{
                if(json.artists.total>0){
                    const artist = json.artists.items[0];
                    this.setState({artist});
                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                    .then(response=>response.json())
                    .then(json=>this.setState({tracks:json.tracks}))
                    .catch(error=>alert(error.message));
                }
            }
        ).catch(error=>alert(error.message)); 
        console.log(this.state)
    }

    render(){    
        return(
            <div>
                <h2>Music Master</h2>
                <div>
                    <Search searchArtist={this.searchArtist}/>
                    <Artist artist={this.state.artist}/>
                    <div>
                    <Tracks tracks={this.state.tracks}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
