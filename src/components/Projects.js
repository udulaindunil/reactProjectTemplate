import React from 'react';
import PROJECTS from '../data/projects';


const Project =(props)=> {
        const {title, image, description,link} = props.project;
        
        return(
            <div style={{display: 'inline-block' , width:300, margin: 10 , color: 'blue'}} >
                <h3>{title}</h3>
                <img src={image} style={{width: 200,height :"auto"}}/>
                <p>
                    {description}
                </p>
                <a href={link} >{link }</a>

            </div>
        )
}

const Projects =()=>(
             <div>
                 <h2> Highlighten Projects </h2>
                 <div>
                     {
                         PROJECTS.map(PROJECT=>{
                             return (
                                 <Project key={PROJECT.id} project={PROJECT}/>
                             )
                         })
                     }

                 </div>
             </div>
        )
    


export default  Projects;
