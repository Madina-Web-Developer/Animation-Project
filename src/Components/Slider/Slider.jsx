import React from 'react'
import "slick-carousel/slick/slick.css";
import Sliderr from "react-slick";

import './Slider.css'
import { IoArrowBackCircleOutline, IoArrowForwardCircle } from 'react-icons/io5';
import { CgArrowLongRightR } from 'react-icons/cg';
import SAM from '../../assets/imgs/Slilder_Anime.png'
import Slider_Main_Bg from '../../assets/imgs/SliderBG.png'
import { LiaArrowRightSolid } from 'react-icons/lia';

const Slider = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <LiaArrowRightSolid />,
        // prevArrow: <IoArrowBackCircleOutline />,
      };




  return (
    <>
    
    
    
    
  
    <div style={{ background:`url(${Slider_Main_Bg})`} } className=" Main_Slide ">
            <div className=" container ">
                <div className="">
                    <div className="">

                    <div className="flex items-center justify-between">

                        <div className="Main_First_Cards_Texts">
                            <h2 className="Slider_H2">Places</h2>
                            <p className="Slider_P">Step into the heart of our welcoming village, where the warmth community envelops you like a comforting embrace.</p>
                        </div>
                        <img src={SAM} alt="" className=" lg:h-[292px] h-[130px]   " />
                    </div>
                        {/* ----------------------------------------------------------------------------------- */}
                        <div className=" relative rounded-[10px]">
                        <Sliderr {...settings}>
                        
                            <div className="singleSlider1">
            {/* ----------------------------------------------------------------------- */}
                                <div className="Main_Slider_Texts">
                                    <h2 className="S_S_H2">Hearth Village</h2>
                                    <p className="S_S_P">Step into the heart of our welcoming village, where the warmth of community envelops you like a comforting embrace.</p>
                                </div>
                            </div>
            {/* ----------------------------------------------------------------------- */}
                            <div className="singleSlider2">
            {/* ----------------------------------------------------------------------- */}
                                <div className="Main_Slider_Texts">
                                    <h2 className="S_S_H2">Hearth Village</h2>
                                    <p className="S_S_P">Step into the heart of our welcoming village, where the warmth of community envelops you like a comforting embrace.</p>
                                </div>
                            </div>


                            <div className="singleSlider1">
            {/* ----------------------------------------------------------------------- */}
                                <div className="Main_Slider_Texts">
                                    <h2 className="S_S_H2">Hearth Village</h2>
                                    <p className="S_S_P">Step into the heart of our welcoming village, where the warmth of community envelops you like a comforting embrace.</p>
                                </div>
                            </div>


                            <div className="singleSlider2">
            {/* ----------------------------------------------------------------------- */}
                                <div className="Main_Slider_Texts">
                                    <h2 className="S_S_H2">Hearth Village</h2>
                                    <p className="S_S_P">Step into the heart of our welcoming village, where the warmth of community envelops you like a comforting embrace.</p>
                                </div>
                            </div>
            {/* ----------------------------------------------------------------------- */}
                       

                        </Sliderr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Slider