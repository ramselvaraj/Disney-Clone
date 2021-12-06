import styled from "styled-components";
import React from "react";
import Movies from './movies.json'

class Movie extends React.Component{
  
  render(){
      return (
            <a href={this.props.href}>
            <img src={this.props.src} alt="" />
            </a>
      );
  }
}
function DisneyAll(){


  return (
    <Container>
      <h3>All Disney PIXAR Movies</h3>
      <Content>
          {Movies.movies.disney.map((movie,i) => (<Wrap><Movie src = {movie.image} href = {movie.href}/></Wrap>))}
        </Content>
       
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));


`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
   
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default DisneyAll;