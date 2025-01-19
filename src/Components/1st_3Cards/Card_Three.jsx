import React from 'react'
import './First_Cards.css';
import cart from '../../assets/imgs/Cart_1_3.png'
import UnderLine from '../../assets/imgs/UnderLine.png'



const Card_Three = () => {
  return (
    <>
    
    
    
    
                <div className="Main3Card pb-[6%] ">
                    <div className="container flex items-center gap-[6%] ">
    
    
    
                        <img src={cart} alt="" className="Image_1st" />
    
    
    
                        <div className="Main_First_Cards_Texts">
                            <h2 className="First_Card_H2">Enjoy together</h2>
                        <img src={UnderLine} alt="" className="UnderLine" />
                            <p className="First_Card_P">Step into the heart of our welcoming village, where
the warmth of community envelops you like a
comforting embrace.</p>
                        </div>

    
    
    
                    </div>
                </div>
        
    
    
    
    
    
    </>
  )
}

export default Card_Three