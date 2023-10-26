import * as React from 'react'
import Navbar from '../navbar/index'
import Sidebar from '../sidebar/index'
import './layout.scss'

interface DashboardBoardProps {
    children: React.ReactNode;
  }

const Dashboard: React.FC<DashboardBoardProps> = ({ children }) => {
  return (
    <div>
        <Navbar/>
        <div className='full-page'>
        <div className='sidebar'>
        
        <Sidebar/>
        </div>
        <div className='main-page'>
            {children}
        </div>
        </div>
      
    </div>
  )
}

const WithDashboardLayout = (Component: React.ComponentType<any>) => {
    return (props:any) => <Dashboard children={<Component {...props} />} />;
  };
  
  export default WithDashboardLayout;