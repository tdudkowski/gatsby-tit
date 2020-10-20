import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default () => {
    // console.log(data)
return (
<Layout>
<Banner />
<section>
    <h2>Stowarzyszenie Tu i Tam</h2>
</section>
<section className="society">
    <div>
<p>Stowarzyszenie Podróżników Tu i Tam skupia ludzi, którzy lubią podróżować i swoją pasją chcieliby zarazić innych. Większość z nas jest przewodnikami (miejskimi, górskimi, terenowymi).</p>
<p>Celem Stowarzyszenia jest propagowanie krajoznawstwa, wiedzy o Dolnym Śląsku i Wrocławiu. Realizujemy projekty turystyczne i edukacyjne dla szkół, osób niepełnosprawnych oraz turystów indywidualnych. Naszym celem jest też propagowanie aktywnego sposobu spędzania czasu wolnego, między innymi poprzez podróżowanie, byliśmy organizatorami Wrocławskiego Festiwalu Podróży im. Benedykta Polaka.</p>
<p>Chcemy również pokazać wrocławianom i turystom, jak ciekawym i wciąż nie do końca odkrytym miastem jest Wrocław, dlatego organizujemy cykliczne wycieczki dla dorosłych pn. "Odkrywamy Wrocław" oraz dla rodzin z dziećmi pn. "Poznajemy Wrocław".</p>
<p>Stowarzyszenie Podróżników TUiTAM<br/>
Wierzbice, ul. Lipowa 47<br/>
55-040 Kobierzyce</p>

<ul>
    <li>tel. +48 661 172 250</li>
    <li>e-mail - tuitam.przewodnicy@interia.pl</li>
    <li>www: przewodnicy.org</li>
</ul>

<ul>
    <li>NIP: 8942931694</li>
    <li>Regon: 020691566</li>
    <li>KRS 0000297149</li>
</ul>
</div>
</section>
       
</Layout>)
}
