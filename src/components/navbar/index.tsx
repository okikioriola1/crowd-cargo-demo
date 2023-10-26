import * as React from 'react'
import Logo from '../../assets/images/logo.png'
import MenuBar from '../../assets/images/menu-bar-icon.svg'
import UserIcon from '../../assets/images/user-icon.svg'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav__wrapper'>
            <div className='nav-logo'>
                <img src={Logo} alt="logo"/>

            </div>
            <div className='my-corner'>
            <div className='my-corner__wrapper'>
                <div className='menu-bar-wrapper'>
                    <img src={MenuBar} alt="menu"/>
                    

                </div>
                <div className='my-corner-text'>
                    <h2>My Corner</h2>
                </div>
                <div className='user-icon-wrapper'>
                    <img src={UserIcon} alt="user"/>
                </div>

            </div>

            </div>
        </div>

    </div>
  )
}

export default Navbar