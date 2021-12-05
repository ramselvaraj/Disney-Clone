import React from 'react'
import DisneyAll from './DisneyAll'
import MarvelAll from './MarvelAll'
import Footer from './Footer'

function Movies() {
    return (
        <div>
        <MarvelAll/>
        <DisneyAll/>
        <Footer/>
        </div>
      )
}

export default Movies;