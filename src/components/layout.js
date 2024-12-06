import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
// import Aside from "./aside"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stowarzyszenie TUiTAM</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout