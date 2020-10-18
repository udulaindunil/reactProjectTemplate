import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = ({children}) =>{



    const style ={
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    }

    return (
        <div >
            <div>
                <h3 style={style}>
                <Link to='/'> Home</Link>
                </h3>

                <h3 style={style}>
                <Link  to='/jokes'> Jokes</Link>
                </h3>

                <h3 style={style}>
                <Link  to='/music-master'> Music Master</Link>
                </h3>

                <h3 style={style}>
                <Link  to='/even-or-odds'> Evens or Odds</Link>
                </h3>

                <h3 style={style}>
                <Link  to='/reaction'> Reaction</Link>
                </h3>
            </div>
            <div>
               {children}
            </div>

        </div>
    )


    // return(

    //     <div>
    //     <h3 style={style}> <a href="/">Home</a></h3>
    
    //     <h3 style={style}> <a href="/jokes">Jokes</a></h3>
    //     </div>
    // )



}

export default Header;