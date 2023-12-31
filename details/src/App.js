import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Alltrains from './Alltrains';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/all' element={<Home/>}/>
        <Route exact path="/" element={<Alltrains/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
