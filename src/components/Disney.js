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
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
return arr;
}
function Disney(){
  let movies = shuffleArray(Movies.movies.disney);

  return (
    <Container>
      <h3>Disney PIXAR</h3>
      <Content>
            {/* <Wrap>  
            <img src="https://whatsondisneyplus.com/wp-content/uploads/2021/05/sdk_logo_rendered_tt_v4_2fe14fb5-scaled.jpeg" alt="" />
            </Wrap>
            <Wrap>  
            <img src="https://hyperpix.net/wp-content/uploads/2020/04/onward-logo-font-free-download-1200x675.jpg" alt="" />
            </Wrap>
            <Wrap>  
            <img src="https://www.whiskynsunshine.com/wp-content/uploads/2020/12/soul-logo-scaled.jpeg" alt="" />
            </Wrap>
            <Wrap>  
            <img src="https://hyperpix.net/wp-content/uploads/2020/05/coco-logo-font-download.jpg" alt="" />
            </Wrap> */}
            {movies.slice(0,4).map((movie,i) => (<Wrap><Movie src = {movie.image} href = {movie.href}/></Wrap>))}
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

export default Disney;