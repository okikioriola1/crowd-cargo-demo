import * as React from "react";
import  { useState, ChangeEvent, KeyboardEvent } from "react"
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom'

import "./verification.scss";

const Verification = () => {

    const [otp, setOTP] = useState<string[]>(["", "", "", "", "", ""]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const newOTP = [...otp];
    newOTP[index] = value;

    setOTP(newOTP);

    if (index < 5 && value !== "") {
      const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    } else if (index === 3 && value !== "") {
      submitOTP(newOTP.join(""));
    }
  };
  const handleKeyPress = (e: KeyboardEvent, index: number) => {
    if (e.key === "Enter") {
      if (index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      } else if (index === 5) {
        submitOTP(otp.join(""));
      }
    }
  };

  const submitOTP = (enteredOTP: string) => {
    console.log("Entered OTP is :", enteredOTP);
    
  };

  return (
    <div className="verification-page">
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="verify-main">
        <div className="verify-main-wrapper">
            <div className="verify-header">
            <h2>Verify your account</h2>
              <h4>Enter the 6 digit OTP code sent to t***n@gmail.com</h4>

            </div>

            <div className="verify-otp-container">
    
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            id={`otp-input-${index}`}
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            maxLength={1}
          />
        ))}
      </div>
      <div className='verify-btn'>
          <Link to='/dashboard'> <button className='verify'>Verify</button></Link>
          </div>

          <div className="code">
            <div className="text">
                <h4>Didn't get the code?</h4>

            </div>
            <div className="resend">
                <button>Resend in 00:59</button>

            </div>
          </div>
    </div>



        </div>
      </div>
    </div>
  );
};

export default Verification;
