import React, { Component } from 'react';
import Projects from './Projects'
import SocialProfile from './SocialProfile';
import Title from './Title';



import logo from '../logo.svg';
import '../App.css';


class App extends  Component {
  state ={displayBio:false};

  toggleDisplayBio=()=>{
      this.setState({displayBio: !this.state.displayBio})
  }

  render(){
    return(

      <div>
            <h1 class="h1">
                Hello!
            </h1>
            
            <p>
                My name is Udula Indunl Sensly
            </p>
            <Title/>
            <p>Im always looking foeward to working on meaningful projects.</p>

            

            { this.state.displayBio ? (
                <div>
                    <p>
                        I live in San Francisco and code every day.
                    </p>

                    <p>My Favourite language is JavaScript and I think React.js is awesome</p>

                    <p>Besides coding , I also like music and ramen!</p>
                    
                    

                    <button onClick={this.toggleDisplayBio}>Show less</button>
                </div>
            ): (
                <div>
                    <button onClick={this.toggleDisplayBio}>Read more</button>

                </div>


            )}

            {/*{bio}*/}

            <div>

                <Projects/>
            </div>

            <div>

                <SocialProfile/>
            </div>

            <div>

                {this.state.displayBio ?(<Title/>):null}
            {/* <Title/> */}
            </div>



        </div>

    )
  }

}




export default App;