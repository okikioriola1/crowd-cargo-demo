import * as React from 'react'
import HomeIcon from '../../assets/images/home-icon.svg'
import InsightIcon from '../../assets/images/insight-icon.svg'
import WalletIcon from '../../assets/images/wallet-icon.svg'
import UsersIcon from '../../assets/images/menu-users-icon.svg'
import DeliveriesIcon from '../../assets/images/deliveries-icon.svg'
import TransactionsIcon from '../../assets/images/transactions-icon.svg'
import TeamIcon from '../../assets/images/team-icon.svg'
import ConfigurationIcon from '../../assets/images/configuration-icon.svg'
import LogoutIcon from '../../assets/images/logout-icon.svg'





import './sidebar.scss'

const sideBarRoutes=[
    {
        name:'Home',
        icon:HomeIcon
    },
    {
        name:'Insight',
        icon:InsightIcon
    },
    {
        name:'Wallet',
        icon:WalletIcon
    },
    {
        name:'Users',
        icon:UsersIcon
    },
    {
        name:'Deliveries',
        icon:DeliveriesIcon
    },
    {
        name:'Transactions',
        icon:TransactionsIcon
    },
    {
        name:'Team',
        icon:TeamIcon
    },
    {
        name:'Configuration',
        icon:ConfigurationIcon
    },
    {
        name:'Logout',
        icon:LogoutIcon
    }


]

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__wrapper'>
            <ul className='sidebar-links-wrapper'>
                {sideBarRoutes.map((item,index)=>(
                    <li key={item?.name} className={`links-wrapper ${item.name==='Users'?'bg-blue' : item.name==='Logout'?'logout-class': ''}`}>
                        <a href='#'><img src={item?.icon} alt="menu-icon"/> <span className="menu-name">{item?.name}</span></a>
                    </li>
                ))}
            </ul>


        </div>
      
    </div>
  )
}

export default Sidebar
