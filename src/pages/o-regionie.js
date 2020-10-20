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
<h2>O regionie</h2>
</section>
<section className="offer">
   <div><h3>Wrocław</h3>
    <p>Stolica Dolnego Śląska</p>
<Link to="/wroclaw" className="link-button" >Wrocław</Link>
   </div>
   <div><h3>Dolny Śląsk</h3>
   <p>Bogactwo historii i przyrody.</p>
   <Link to="/dolny-slask" className="link-button" >Dolny Śląsk</Link>
   </div>
   <div><h3>Materiały</h3>
   <p>Odnośniki i książki</p>
   <Link to="/materialy" className="link-button" >Materiały</Link>
   </div>
</section>
       
</Layout>)
}
