import React,{ Component } from 'react';
import SOCIAL_PROFILE from '../data/socialProfiles'

const SocialMeadia =(props)=>{
    const {id , image , link } = props.socialItem;
        return(
            <span>

                <a href={link}> <img src={image} style={{height:20 , width: "auto" , margin: 5}}/></a>
            </span>
        )
    
}

const SocialProfile = () => (
            <div>
                {SOCIAL_PROFILE.map(x=>{
                    return (
                        <SocialMeadia key={x.id} socialItem={x}/>
                    )
                })}
            </div>
        )

export default SocialProfile;