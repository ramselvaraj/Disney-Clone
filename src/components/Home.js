import React from 'react'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Marvel from './Marvel';
import Disney from './Disney';
import Footer from './Footer';

function Home() {
    return (
        <div>
          <marvelMovies/>
        <ImgSlider />
        <Viewers />
        <Marvel/>
        <Disney />
        <Footer/>
        </div>
      )
}


export default Home
 