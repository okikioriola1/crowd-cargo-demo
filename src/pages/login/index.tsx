import * as React from 'react'
import { Link } from 'react-router-dom'
import EyeIcon from '../../assets/images/eye-icon.svg'
import LoginImage from '../../assets/images/login-image.png'
import './login.scss'

const Login = () => {
  return (
    <div className='login-page'>
        <div className='login-wrapper'>
            <div className='left'>
                <div className='left__wrapper'>
                    <div className='content'>
                    <div className='image-container'>
                        <img src={LoginImage} alt="login"/>

                    </div>
                    <div className='text'>
                        <h2>Manage Lorem Ipsum Store</h2>
                        <h5>Take control of Lorem Ipsum with this all-in-one solution for Ipsum.</h5>
                    </div>
                    <div className='carousel-slider'>
                        <div className='slide-box active'></div>
                        <div className='slide-box'></div>
                        <div className='slide-box'></div>
                    </div>
                </div>
                </div>
            </div>
            <div className='right'>
                <div className='main-login'>
                    <div className='login-header'>
                        <h2>Login</h2>
                        <h4>To Login, input the details you signed up with</h4>
                    </div>
                    <div className='loginform-section'>
                        <form className='loginform'>
                            <div className='input-container'>
                                <h4>Email </h4>
                                <input type="email" placeholder="Enter your email" className="login-input"/>
                            </div>
                            <div className='input-container password-container'>
                                <h4>Password </h4>
                                <input type="password" placeholder="Password" className="login-input" />
                                <span className="show-password" id="showPassword">
                                <img src={EyeIcon} alt="password"/>
                                </span>
                            </div>
                            <div className='login-btn'>
                               <Link to='/verify'> <button className='login'>Login</button></Link>
                               </div>
                        </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login