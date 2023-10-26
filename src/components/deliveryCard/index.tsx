import * as React from 'react'
import { Tabs, TabsProps, Steps, StepsProps } from "antd";

import './delivery-card.scss'

const DeliveryCardDetails =()=>{
    const customDot: StepsProps['progressDot'] = (dot) => (
        
            <>
            {dot}
            </>
            

        
       
       
      );
    const items = [
        {
          title: 'Booked',
          description:'16:00, Thu, jun 16',
        },
        {
          title: 'Accepted',
          description:'16:02, Thu, jun 16'
         
        },
        {
          title: 'Picked Up',
          
        },
        {
            title:'Delivered'
        }
      ];
    return(
        <div className='card-details'>
        <div className='card-details-header'>
            <h2> Crowd Cargo</h2>
            <button>View Image</button>

        </div>
        <div className='delivery-info'>
            <div className='top'>
                <div className='info'>
                    <h2>Package ID</h2>
                    <h3>NGR-1108220008</h3>
                </div>
                <div className='info'>
                    <h2>Recipient Name</h2>
                    <h3>Akinola Akinpelu</h3>
                </div>
                <div className='info'>
                    <h2>Recipent Phone</h2>
                    <h3>+2347099999999</h3>
                </div>
            </div>
            <div className='bottom'>
            <div className='info'>
                    <h2>Confirmation Pin</h2>
                    <h3>2311</h3>
                </div>
                <div className='info'>
                    <h2>Fragile Package</h2>
                    <h3>NO</h3>
                </div>
                <div className='info'>
                    <h2>Package Weight</h2>
                    <h3>25kg</h3>
                </div>
            </div>
        </div>
        <div className='progress'>
        <Steps className="progress-steps"  current={2} labelPlacement="vertical" items={items} />

        </div>
        </div>
    )
}

const DeliveryCard = () => {
    const Tabitems: TabsProps["Tabitems"] = [
        {
          key: "1",
          label: `Delivery Details`,
          children: (
            <>
            <DeliveryCardDetails/>
            
            </>
          ),
        },
        {
          key: "2",
          label: `Runner Information`,
          children: (
            <>
            <DeliveryCardDetails/>
            
            </>
          ),
        },
        {
          key: "3",
          label: `Customer Information`,
          children: (
            <>
            <DeliveryCardDetails/>
            
            </>
          ),
        },
        {
          key: "4",
          label: `More`,
          children: (
            <>
            <DeliveryCardDetails/>
            
            </>
          ),
        },
      ];
  return (
    <div className='delivery-card'>
        <div className='delivery-card__wrapper'>
        <Tabs
            className='delivery-tabs'
            centered
            items={Tabitems}
            defaultActiveKey="1"
          />

        </div>

    </div>
  )
}

export default DeliveryCard