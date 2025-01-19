import React from 'react'
import './Video.css'
import video from '../../assets/imgs/Video.png'
import { Link } from 'react-router-dom'

const Fideo = () => {
  return (
    <>
    
    
    
    <div className="Main_Video">
        <div className="container ">
            <div className="">
            <div className="">
                <Link
                    to="https://youtu.be/QsHWebfAwpY?si=1GiRhQReMTcRvJfi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={video} alt="" className="video" />
                </Link>
            </div>

            </div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Fideo