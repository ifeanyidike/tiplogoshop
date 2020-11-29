import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import {testimonial_features} from "../components/JsonAPIs"


const Testimonial = ({perPage}) => {
    const length = testimonial_features.length
    
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={length}
        visibleSlides={perPage}
        infinite={true}
        isIntrinsicHeight={true}
      >
        <Slider>
          
           {testimonial_features.map((feature, index) =>(
            <Slide key={index} index={index}>
                <div className="slide__item">
                    <img src={feature.src} alt={`${feature.name} testimonial`}/>
                    <div>
                        <p>
                            {
                                feature.desc.length > 70 
                                ? 
                                
                                feature.desc.substring(0, 70) 
                                + String.fromCharCode(8230)
                                
                                :
                                feature.desc
                            }
                        </p>
                        <small>{feature.name}</small>
                    </div>
                </div>
            </Slide>
           ))}
           
          
        </Slider>
        <ButtonBack><ArrowBackIcon fontSize='large' /></ButtonBack>
        <ButtonNext><ArrowForwardIcon fontSize='large' /></ButtonNext>
          
      </CarouselProvider>
    )
}

export default Testimonial
