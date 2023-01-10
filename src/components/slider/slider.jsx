import { useState, useEffect } from 'react'
import './slider.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { sliderData } from './slider-data'

const Slider = () => {
    const [curentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;


    const autoScroll = true;

    let slideInterval;
  
    
    const nextSlide =()=> {
        setCurrentSlide(curentSlide === slideLength -1 ? 0 : curentSlide + 1 )
    }

    const prevSlide =()=> {
        setCurrentSlide(curentSlide === 0 ? slideLength - 1 : curentSlide - 1)
    }

    function auto() {
        slideInterval = setInterval(nextSlide, 5000)
    }

    useEffect(() => {
        setCurrentSlide(0)
    },[])

    useEffect(()=> {
       if(autoScroll) {
         auto()
       }
       return () => clearInterval(slideInterval)
    }, [curentSlide])


    return (
        <div className='slider'>
            <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
            <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>

            {
                sliderData.map((slide, index) => {
                    return (
                        <div className={index === curentSlide ? 'slide current' : "slide"} key={index}>
                            {index === curentSlide && (
                                <div>
                                    <img src={slide.image} alt="slide-image" />
                                    <div className="content">
                                        <h2>{slide.heading}</h2>
                                        <p>{slide.desc}</p>
                                        <hr />
                                        <button className='--btn --btn-primary'>Get Started</ button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Slider