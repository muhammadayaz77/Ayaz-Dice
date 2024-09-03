import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Home'
import Play from '../Play'
function Index() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/play' element={<Play />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index