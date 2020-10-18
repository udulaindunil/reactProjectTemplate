import React, { Component } from 'react';

const TITILE = [
    'a software enginer',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
];

class Title extends Component{

    state = {titleIndex :0, fadeIn: true};

    componentDidMount(){
        this.timeout = setTimeout(()=>{
            this.setState({fadeIn:false})
        },2000)
        this.animateTitle();
    }
    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearInterval(this.timeout);
    }

    animateTitle = ()=>{

       this.titleInterval = setInterval(()=>{
            const titleIndex = (this.state.titleIndex+1)%4;
            this.setState({titleIndex});  
            this.setState({titleIndex,fadeIn: true}) 
            this.timeout=setTimeout(()=>{
                this.setState({fadeIn: false})
            },2000)
        },4000)

    }

    render(){

        const {fadeIn,titleIndex} = this.state;
        return(
            <div>
              <p className={fadeIn ? 'title-fade-in': 'title-fade-out'}>
                    {TITILE[this.state.titleIndex]}
               </p>  
            </div>
        )
    }
}

export default Title;