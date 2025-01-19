import React from 'react'
import './First_cards.css';
import cart_1_1 from '../../assetscls/imgs/Cart_1_1.png'
import UnderLine from '../../assets/imgs/UnderLine.png'

const Card_One = () => {
  return (
    <>
    
    
    
            <div className="Main3Card">
                <div className="container flex items-center gap-[6%] ">



                    <img src={cart_1_1} alt="" className="Image_1st" />



                    <div className="Main_First_Cards_Texts">
                        <h2 className="First_Card_H2">Experience mesmerizing scenes & landscapes</h2>
                    <img src={UnderLine} alt="" className="UnderLine" />
                        <p className="First_Card_P">Step into the heart of our welcoming village, where the warmth of community envelops you like a comforting embrace.</p>
                    </div>




                </div>
            </div>
    
    
    
    </>
  )
}

export default Card_One