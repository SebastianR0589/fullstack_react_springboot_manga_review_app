import React from 'react'
import  './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';


const Hero = ({mangas}) => {
  return (
    <div className = 'manga-carousel-container'>
    <Carousel>
       { 
       mangas.map((manga) => {
        return (
        <Paper>
            <div className = 'manga-card-container'>
                <div className = 'manga-card' style={{"--img": `url(${manga.backdrops[0]})`}}>
                    <div className = 'manga-detail'>
                        <div className= 'manga-image'>
                            <img src={manga.imageUrl} alt={manga.title} />
                        </div>
                        <div className='manga-title'>
                            <h4>{manga.title}</h4>
                        </div>
                    </div>

                </div>
                </div>

       </Paper>)})}
        </Carousel>
        </div>
  )
}

export default Hero