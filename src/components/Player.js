import React from 'react'

function Player(props){
    var title = props.name;
    var src = props.src;
    var playerStyle = {
            align:"center",
            display:"flex",
            justifyContent: "center"
            
        }
    return (
        <div>
        <h3>{title}</h3>
        <iframe style = {playerStyle} width="720" height="405" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
        
    )

}

export default Player;