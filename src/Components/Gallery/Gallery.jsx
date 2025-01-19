import React from 'react'
import './Gallery.css'
import gal1 from '../../assets/imgs/gal1.png'
import gal2 from '../../assets/imgs/gal2.png'
import gal3 from '../../assets/imgs/gal3.png'
import gal4 from '../../assets/imgs/gal4.png'
import gal5 from '../../assets/imgs/gal5.png'
import gal6 from '../../assets/imgs/gal6.png'
import { PiStarFourFill } from 'react-icons/pi'



const Gallery = () => {
  return (
    <>
    
    
    
    <div className="Main_Gal">
        <div className="">
            <div className="container">
                <div className="News_Main_Head">
                    <PiStarFourFill className='News_Star'/>
                    <h2 className="Main_News_H2">Image gallery</h2>
                    <PiStarFourFill className='News_Star'/>
                </div>
                <div className="Gal_Items">
                    <img src={gal1} alt="gal" className="" />
                    <img src={gal2} alt="gal" className="" />
                    <img src={gal3} alt="gal" className="" />
                    <img src={gal4} alt="gal" className="" />
                    <img src={gal5} alt="gal" className="" />
                    <img src={gal6} alt="gal" className="" />
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Gallery