import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import routes from './routes'

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
        {routes.map((item, i)=>(
            
            <Route
                key={i}
                path={item.path}
                exact={item.exact}
                element={<item.component />}
              />
            
        ))}
        </Routes>
        </Router>

    </div>
  )
}

export default AppRouter
