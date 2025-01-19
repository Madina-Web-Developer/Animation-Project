import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
        
    <div className="Main_Banner">
        <div className="MBN">

       
        <div className="container">
        <div className="Banner_Main_Text">
            <h2 className="Banner_H2">Escape into
            the rural life</h2>
            <p className="Baner_P">A heartwarming and tranquil farming sim game that
invites you to escape city life and embrace the
serene beauty of rural living. Play for free.
            </p>
            <div className="NavButtons">
                 <Link className='Single_Button1'>Download now</Link>
            </div>
        </div>
        </div>

        </div>
    </div>

    </>
  )
}

export default Banner