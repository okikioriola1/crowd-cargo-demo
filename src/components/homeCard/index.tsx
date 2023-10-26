import * as React from 'react'
import FlashIcon from '../../assets/images/flash-icon.svg'
import FlashGreenIcon from '../../assets/images/flash-green-icon.svg'
import ClockIcon from '../../assets/images/clock-icon.svg'
import CalendarIcon from '../../assets/images/calendar-icon.svg'
import RouteIcon from '../../assets/images/route-icon.svg'

import './card.scss'


const expressDelivery:boolean= true
const fragile:boolean= true

const HomeCard = () => {
  return (
    <div className='card'>
        <div className='card__wrapper'>
            <div className='header'>
                <h2>Package ID: NGR-1108220008</h2>
                <h4>Active</h4>
            </div>
            <div className='delivery-info'>
                <div className='amount info'>
                    <img src={FlashIcon} alt='icon'/>
                    <h4>3 Deliveries</h4>

                </div>
                <div className='date info'>
                <img src={CalendarIcon} alt='icon'/>
                    <h4>Thu, jun 16/22</h4>
                    

                </div>
                <div className='time info'>
                <img src={ClockIcon} alt='icon'/>
                    <h4>2:00pm</h4>

                </div>
                { expressDelivery && (
                <div className='express info'>
                   
                  <img src={FlashGreenIcon} alt='icon'/>
                    <h4>Express delivery</h4>

                </div>

                )}

            </div>
            <div className='time-place'>
                <div className='time'>
                    <h4>2:00</h4>

                </div>

                <div className='place'>
                    <div className='route'>
                        <img src={RouteIcon} alt='route'/>


                    </div>
                    <div className='where'>
                        <h4>Sharon str, Ketu</h4>
                        <h5>12 Thomas Str, Palmgrove</h5>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='price'>
                    <h2>Price : <span className='amount'>N12,000</span></h2>
                </div>
                {fragile && (
                    <div className='fragile'>
                        <div className='fragile__wrapper'>
                            <h4>Fragile</h4>

                            </div>

                    </div>
                )}
            </div>
        </div>


    </div>
  )
}

export default HomeCard