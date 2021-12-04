import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Marvel from './Marvel';
import Disney from './Disney';

function Home() {
    return (
        <div>
          <marvelMovies/>
        <ImgSlider />
        <Viewers />
        <Marvel/>
        <Disney />
        </div>
      )
}


export default Home
 