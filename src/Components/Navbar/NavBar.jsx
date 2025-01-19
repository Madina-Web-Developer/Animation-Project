import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../../assets/imgs/logo.png'

const NavBar = () => {
  return (
    <>
    
    
    
    
    <nav className=" bg-[#EEDCC9] ">
        <div className="container">
            <div className="">
                <div className="Main_Menu">
                    <div className=" Main_Logo ">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className="Nav_Items">
                      <ul className="NavUL">
                        <li><Link> Watch trailer</Link></li>
                        <li><Link> News </Link></li>
                        <li><Link> Support </Link></li>
                      </ul>
                    <div className="NavButtons">
                      <Link className='Single_Button1'>Download now</Link>
                      <Link className='Single_Button2'>Sign in</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
    
    
    
    </>
  )
}

export default NavBar