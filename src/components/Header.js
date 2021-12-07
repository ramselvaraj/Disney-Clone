import React from 'react'
import styled from 'styled-components'

function Header() {
    var styles = {
        textAlign: "center",
        justifyContent: "center",
        width : '100px',
        maxHeight: '120px',
        display: 'inline-block',
        alignItems: 'center',
        margin : 'auto'
    }
    var linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: '#3391FF'
    }
    
    return (
        <Nav>
            <NavMenu>
                <a href = "/" style = {linkStyle}>
                    <img id = "icon"src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a href = "/" style = {styles}>
            <Logo src="/images/logo.svg"/>
            </a>
                <a href = "movies" style = {linkStyle}>
                    <img id = "icon"src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a href = "http://localhost:9999/" target = "_self">
                <UserImg src="/images/user.png"/>
                </a>
            </NavMenu>
            
        </Nav>
        
        
    )
}

export default Header

const Nav = styled.nav`
 position: fixed;
top: 0;
left: 0;
right: 0;
height : 70px;
background : #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
z-index: 3;
`

const Logo = styled.img`
text-align: center;
justify-content: center;
width : 100px;
max-height: 120px;
display: inline-block;
align-items: center;
margin : auto;

`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        
        span {
            font-size: 14px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0; 
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(0);
            }
        }
        #icon {
            height: 20px;
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 32px;
    height: 32x;
    border-radius: 50%;
    cursor: pointer;
`

