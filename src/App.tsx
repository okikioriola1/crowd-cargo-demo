
import * as React from'react'

import AppRouter from './routes/AppRouter'




function App() {


  return (
    <>
    
    
    <div className='desktop-view'>
   <AppRouter/>

    </div>
    <div className='mobile-view'>
    <h2>You can only view on desktop screens</h2>

    </div>
    </>
  )
}

export default App
