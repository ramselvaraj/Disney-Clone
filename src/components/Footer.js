import React from 'react'

function Footer() {
    var nameStyle = {
        fontSize:"14px",
        padding: "2px"
        }
    var footerCSS = {
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "black",
        position:"absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        paddingBottom:"0px"
      }
    return (
        <div style = {footerCSS}>
            <h5>About Disney+</h5>
            <div id="authNames" style = {nameStyle}>
            <h7>Project Authors-</h7><br></br>
            <h7>Rushil Ranjan - PES2UG20CS288</h7><br></br>
            <h7>Ram Selvaraj - PES2UG20CS265</h7><br></br>
            <h7>Sreehari Vyas - PES2UG20CS327</h7><br></br>
            </div>
        </div>

    )
}

export default Footer

