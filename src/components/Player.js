import React from 'react'

function Player(props){
    var title = props.name;
    var src = props.src+"?rel=0&amp;autoplay=1&mute=1";
    var imdb = props.imdb;
    var plot = props.plot;
    var playerStyle = {
            align:"center",
            display:"flex",
            justifyContent: "center"
            
        }
    return (
        <div>
        <h3>{title}</h3>
        <iframe style = {playerStyle} width="1400" height="405" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4><div style = {{color:"yellow"}}>IMDb</div> {imdb}</h4>
        <p>{plot}</p>
        </div>
        
    )

}

export default Player;