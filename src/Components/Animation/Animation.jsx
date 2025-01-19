import React, { useState } from 'react'
import './Animation.css'
import ab1 from '../../assets/imgs/A_B_1.png'
import ab2 from '../../assets/imgs/A_B_2.png'
import a1 from '../../assets/imgs/Anime1.png'
import a2 from '../../assets/imgs/Anime2.png'



const Animation = () => {
    const [imge , setimge]=useState(true)
  return (
    <>
    
    
    
    <div className="Animation_Head !pt-[5%] "></div>

    <div className="Meet_main">
            <div className="container">
                <div className="head_text">
                    <h1>✨ Meet the people of Hearthside ✨</h1>
                </div>
                <div className="card_part">
                    <div className="main_card">
                        <div className="mini_card">
                            <img src={ab1} alt="card" onClick={() => setimge(true)} />
                            <img src={ab2} alt="card" className='mt-[12px]' onClick={() => setimge(false)}/>
                        </div>
                        <div className="big_card">
                            {
                                imge?(
                                    <img src={a1} alt="hum"/>
                                ):
                                (
                                    <img src={a2} alt="hum" />
                                )
                            }
                        </div>
                        <div className="text_cards">
                            <h2>Hazel</h2>
                            <p>With auburn hair cascading in
                                gentle waves around her face and
                                twinkling hazel eyes that seem to
                                hold the secrets of the world,
                                she's the heart and soul of the
                                local tavern, aptly named "The
                                Hearthstone."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default Animation