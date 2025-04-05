import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AppContext from "./context/AppContext.jsx"

import Example from "./view/Example.jsx"

const Layout= ()=>{

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Example />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppContext(Layout)