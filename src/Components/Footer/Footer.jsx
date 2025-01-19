import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { PiStarFourFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import './Footer.css'
import ULL from '../../assets/imgs/UnderLine.png'
import FLOGO from '../../assets/imgs/logo.png'



const Footer = () => {
  return (
    <>
    
    
    
    <div className="MainFooter">
        <div className="">
            <div className="container">
                <div className="">
                {/* ------------------------------------- */}
                    <div className="Footer_Top">
                        <h2>Stay connected</h2>
                        <div className="F_T_IC">
                        <Link>
                        <FaDiscord />
                        </Link>
                        <Link>
                        <FaYoutube />
                        </Link>
                        <Link>
                        <FaTiktok />
                        </Link>
                        <Link>
                        <FaInstagram />
                        </Link>
                        <Link>
                        <FaFacebook />
                        </Link>
                        </div>
                    </div>
                {/* ------------------------------------- */}
                <img src={ULL} alt="ull" className="F_U_L" />
                {/* ------------------------------------- */}
                    <div className="Footer_Bottom">
                        <div className="F_T_BT">
                            <img src={FLOGO} alt="logo" className="F_BT_LG" />
                            <div className="F_BT_Items">
                                <Link>News</Link><PiStarFourFill className='News_Star'/>
                                <Link>Support</Link><PiStarFourFill className='News_Star'/>
                                <Link>Privacy</Link><PiStarFourFill className='News_Star'/>
                                <Link>Terms</Link><PiStarFourFill className='News_Star'/>
                                <Link>Licenses</Link>
                                
                            </div>
                        </div>
                    </div>
                {/* ------------------------------------- */}
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Footer