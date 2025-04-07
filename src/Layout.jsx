import React from "react"

import AppContext from "./context/AppContext.jsx"

import Example from "./view/Example.jsx"

const Layout= ()=>{
  return (
    <Example/>
  )
}

export default AppContext(Layout)