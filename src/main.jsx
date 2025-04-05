import React from "react"
import ReactDOM from "react-dom/client"

import Layout from "./Layout.jsx"

import './res/styles.css'

function main(){
  ReactDOM.createRoot(document.getElementById('react-root')).render(
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  )
}

main()