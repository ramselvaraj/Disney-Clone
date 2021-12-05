import React from 'react'

function Player(props){
    var title = "Spiderman - No Way Home";
    var src = "";
    var playerStyle = {
            align:"center",
            display:"flex",
            justifyContent: "center"
            
        }
    return (
        <div>
        <h3>{title}</h3>
        <iframe style = {playerStyle} width="560" height="315" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
    )

}

export default Player;