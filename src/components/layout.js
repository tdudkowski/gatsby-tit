import React from "react"
import Header from "./header"
// import Aside from "./aside"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
      <div className="container">
          <Header/>
          <main>{children}</main>
          <Footer />
      </div>
  )}

export default Layout