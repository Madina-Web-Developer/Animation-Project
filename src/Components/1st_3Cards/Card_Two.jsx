import React from 'react'
import './First_cards.css'
import cart_1_2 from '../../assets/imgs/Cart_1_2.png'
import UnderLine from '../../assets/imgs/UnderLine.png'

const Card_Two = () => {
  return (
    <>
    
    
    
    
    
                <div className="Main3Card">
                    <div className="container flex items-center gap-[6%] ">
    
    
    
    
                        <div className="Main_First_Cards_Texts">
                            <h2 className="First_Card_H2">Live the rural life with friends & family</h2>
                        <img src={UnderLine} alt="" className="UnderLine" />
                            <p className="First_Card_P">Step into the heart of our welcoming village, where
the warmth of community envelops you like a
comforting embrace.</p>
                        </div>
    
    
                        <img src={cart_1_2} alt="" className="Image_1st" />
    
    
                    </div>
                </div>
    
    
    
    
    
    </>
  )
}

export default Card_Two