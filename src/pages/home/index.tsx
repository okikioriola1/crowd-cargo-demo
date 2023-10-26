import * as React from 'react'
import SearchIcon from '../../assets/images/search-icon.svg'
import MapsImage from '../../assets/images/map-img.png'
import HomeCard from '../../components/homeCard/index'


import './home.scss'
import DeliveryCard from '../../components/deliveryCard/index'

const Home = () => {
  return (
    <div className='home'>
    <div className='header'>
      <div className='left'>
        <div className='top'>
          <h2>Deliveries</h2>

        </div>
        <div className='bottom'>
          <h3>Users <span>&gt;</span></h3>
          <h3>User Profile <span>&gt;</span></h3>
          <h3 className='active-tab'>Active Deliveries</h3>

        </div>
      </div>
      <div className='right'>
        <div className='right__wrapper'>
          <div className='text'>
            <h2>New Deliveries</h2>

          </div>
          <div className='badge'>
            <h2>50</h2>

          </div>
        </div>
      </div>

    </div>

    <div className="home-search">
            <form>
                <span className='search-icon'><img src={SearchIcon} alt="search"/></span>
                <input className='search-input' type="text" placeholder='Search for Deliveries...'/>
            </form>

        </div>

      <div className='main-home-page'>
        <div className='left'>
          <div className='left-header'>
            <h2>Tuesday 12/9/22</h2>
          </div>

          <div className='card-section-wrapper'>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>


          </div>
          <div className='left-header'>
            <h2>Monday 11/9/22</h2>
          </div>
          <div className='card-section-wrapper'>
            <HomeCard/>
            </div>

        </div>
        <div className='right'>
          <div className='maps-section'>
            <img src={MapsImage} alt='maps'/>
          </div>
          <div className='pills-section'>
            <div className='pills-wrapper'>
              <button className='active-pill'>Delivery 1</button>
              <button>Delivery 2</button>
              <button>Delivery 3</button>
              <button>Delivery 4</button>
            </div>
          </div>
          <div className='delivery-details-section'>
            <DeliveryCard/>
          </div>
          

        </div>
      </div>


    </div>
  )
}

export default Home
