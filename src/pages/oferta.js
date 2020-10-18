import React from 'react'
import { Link } from "gatsby";
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default () => {
    // console.log(data)
return (
<Layout>
<Banner />
<section>
<h2>Oferta</h2>
</section>
<section className="offer">
   <div><h3>Przewodnicy</h3>
<Link to="/przewodnicy" className="link-button" >Lista przewodników</Link>
   </div>
   <div><h3>Trasy wycieczek</h3>
   <Link to="/trasy-wycieczek" className="link-button" >Trasy wycieczek</Link>
   </div>
   <div><h3>Publikacje</h3>
   <Link to="/publikacje" className="link-button" >Publikacje</Link>
   </div>
</section>
       
</Layout>)
}
