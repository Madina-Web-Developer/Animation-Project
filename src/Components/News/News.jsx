import React from 'react'
import './News.css'
import { Link } from 'react-router-dom'
import news1 from '../../assets/imgs/news1.png'
import news2 from '../../assets/imgs/news2.png'
import news3 from '../../assets/imgs/news3.png'
import { PiStarFourFill } from 'react-icons/pi'

const News = () => {
  return (
    <>
    
    
    <div className="Animation_Head !pt-[5%] "></div>

    <div className="News_Main_Card bg-[#EEDCC9]">
        <div className="">
            <div className="container">
                <div className="News_Main_Head">
                    <PiStarFourFill className='News_Star'/>
                    <h2 className="Main_News_H2">News</h2>
                    <PiStarFourFill className='News_Star'/>
                </div>
                <div className="NewsCardsss">
                {/* ----------------------------------- */}
                    <div className="News_Single_Card">
                        <img src={news1} alt="news" className="News_Single_Image" />
                        <div className="Single_News_Date">
                            <p className="news_Date_P">March 18, 2024</p>
                                <PiStarFourFill className='News_Star'/>
                            <p className="news_Date_P">Promotions</p>
                        </div>
                        <h1 className="Single_News_H1">Natus Quas Et</h1>
                        <p className="Single_News_P">Voluptatem eveniet voluptates. Doloremque ut et. Ducimus tempore quod laborum dolores minima tempore minima quia. Dolorem mollitia nesciunt ad aperiam ea et. Placeat expedita et deserunt velit corrupti incidunt. Non non placeat ut. Eiu</p>
                    </div>
                {/* ----------------------------------- */}
                {/* ----------------------------------- */}
                    <div className="News_Single_Card">
                        <img src={news1} alt="news" className="News_Single_Image" />
                        <div className="Single_News_Date">
                            <p className="news_Date_P">March 18, 2024</p>
                                <PiStarFourFill className='News_Star'/>
                            <p className="news_Date_P">Promotions</p>
                        </div>
                        <h1 className="Single_News_H1">Natus Quas Et</h1>
                        <p className="Single_News_P">Voluptatem eveniet voluptates. Doloremque ut et. Ducimus tempore quod laborum dolores minima tempore minima quia. Dolorem mollitia nesciunt ad aperiam ea et. Placeat expedita et deserunt velit corrupti incidunt. Non non placeat ut. Eiu</p>
                    </div>
                {/* ----------------------------------- */}
                {/* ----------------------------------- */}
                    <div className="News_Single_Card">
                        <img src={news1} alt="news" className="News_Single_Image" />
                        <div className="Single_News_Date">
                            <p className="news_Date_P">March 18, 2024</p>
                                <PiStarFourFill className='News_Star'/>
                            <p className="news_Date_P">Promotions</p>
                        </div>
                        <h1 className="Single_News_H1">Natus Quas Et</h1>
                        <p className="Single_News_P">Voluptatem eveniet voluptates. Doloremque ut et. Ducimus tempore quod laborum dolores minima tempore minima quia. Dolorem mollitia nesciunt ad aperiam ea et. Placeat expedita et deserunt velit corrupti incidunt. Non non placeat ut. Eiu</p>
                    </div>
                {/* ----------------------------------- */}
                </div>
                <div className="mmmmb">
                <Link className='News_Main_Button'>Browse all</Link>
                </div>

            </div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default News