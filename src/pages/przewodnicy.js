import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"
import "../styles/font-awesome/css/font-awesome.css"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <Banner />
            <section>
                <h2>Przewodnicy</h2>
            </section>
            <section className="guides">
                <div>
                    <Img fixed={data.sebastianb.childImageSharp.fixed} alt="Sebastian Bagiński" width="100" />
                    <ul>
                        <li className="name">Sebastian Bagiński</li>
                        <li className="guide">przewodnik miejski wrocławski</li>
                        <li className="language">język: polski, angielski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 692 257 634 | <i className="fa fa-at" aria-hidden="true"></i> seba_baginski@wp.pl</li>
                    </ul>

                </div>
                <div>
                    <Img fixed={data.andrzejb.childImageSharp.fixed} alt="Andrzej Borówka" width="100" />
                    <ul>
                        <li className="name">Andrzej Borówka</li>
                        <li className="guide">przewodnik miejski wrocławski</li>
                        <li className="language">język: polski, niemiecki</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 601 797 685 | <i className="fa fa-at" aria-hidden="true"></i> andrzej-borowka@wp.pl</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.waldemarb.childImageSharp.fixed} alt="Waldemar Brygier" width="100" />
                    <ul>
                        <li className="name">Waldemar Brygier</li>
                        <li className="guide">przewodnik miejski wrocławski, przewodnik górski sudecki, pilot wycieczek</li>
                        <li className="area">pilotaż: Polska, Saksonia, Czechy, Morawy; oprowadzanie: Praga, Drezno, Berlin</li>
                        <li className="language">język: polski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 697 913 148 | <i className="fa fa-at" aria-hidden="true"></i> waldek@naszesudety.pl | <i className="fa fa-laptop" aria-hidden="true"></i> <a href="http://naszesudety.pl">Nasze Sudety</a></li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.arkadiuszc.childImageSharp.fixed} alt="Arkadiusz Cencora" width="100" />
                    <ul>
                        <li className="name">Arkadiusz Cencora</li>
                        <li className="guide">przewodnik miejski wrocławski, pilot wycieczek</li>
                        <li className="language">język: polski, niemiecki, czeski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 508 349 056 | <i className="fa fa-at" aria-hidden="true"></i> arkadiusz.cencora@wp.pl</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.tadeuszd.childImageSharp.fixed} alt="Tadeusz Dudkowski" width="100" />
                    <ul>
                        <li className="name">Tadeusz Dudkowski</li>
                        <li className="guide">przewodnik miejski wrocławski, przewodnik górski sudecki, pilot wycieczek</li>
                        <li className="area">pilotaż: Polska, Brandenburgia, Saksonia; oprowadzanie: Dolny Śląsk, Berlin, Drezno, Miśnia</li>
                        <li className="language">język: polski, angielski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i>  660 504 285 | <i className="fa fa-at" aria-hidden="true"></i> tdudkowski@gmail.com | <i className="fa fa-laptop" aria-hidden="true"></i> <a href="http://dygresje.info">dygresje.info</a></li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.tatianagf.childImageSharp.fixed} alt="Tatiana Granowska-Florea" width="100" />
                    <ul>
                        <li className="name">Tatiana Granowska-Florea</li>
                        <li className="guide">przewodnik miejski wrocławski i praski</li>
                        <li className="language">język: polski, czeski, rosyjski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 798 536 042 | <i className="fa fa-at" aria-hidden="true"></i> tatiana.granowska@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.aldonak.childImageSharp.fixed} alt="Aldona Kowalska" width="100" />
                    <ul>
                        <li className="name">Aldona Kowalska</li>
                        <li className="guide">przewodnik miejski wrocławski, pilot wycieczek</li>
                        <li className="language">język: polski, niemiecki</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 691 520 943 | <i className="fa fa-at" aria-hidden="true"></i> aldonakowalska11@wp.pl</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.agnieszkam.childImageSharp.fixed} alt="Agnieszka Malczewska" width="100" />
                    <ul>
                        <li className="name">Agnieszka Malczewska</li>
                        <li className="guide">przewodnik miejski wrocławski</li>
                        <li className="language">język: polski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 691 679 244 | <i className="fa fa-at" aria-hidden="true"></i> agnieszka.malczewska1@wp.pl</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.aldonam.childImageSharp.fixed} alt="Aldona Mikucka" width="100" />
                    <ul>
                        <li className="name">Aldona Mikucka</li>
                        <li className="guide">przewodnik miejski wrocławski</li>
                        <li className="language">język: polski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 601 455 918 | <i className="fa fa-at" aria-hidden="true"></i> aldona.mikucka@gmail.com | <i className="fa fa-at" aria-hidden="true"></i> antares.wroclaw.pl</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.martam.childImageSharp.fixed} alt="Marta Miniewicz" width="100" />
                    <ul>
                        <li className="name">Marta Miniewicz</li>
                        <li className="guide">przewodnik miejski wrocławski i praski, przewodnik terenowy dolnośląski, przewodnik górski sudecki, pilot wycieczek</li>
                        <li className="language">język: polski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 661 172 250 | <i className="fa fa-at" aria-hidden="true"></i> marta.miniewicz@interia.pl | <i className="fa fa-laptop" aria-hidden="true"></i> <a href="http://xn--koowrocek-rub.pl">Kołowrocek.pl</a></li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.annam.childImageSharp.fixed} alt="Anna Motyka" width="100" />
                    <ul>
                        <li className="name">Anna Motyka</li>
                        <li className="guide">przewodnik miejski wrocławski, przewodnik górski sudecki, pilot wycieczek</li>
                        <li className="language">język: polski, niemiecki</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 693 771 391 | <i className="fa fa-at" aria-hidden="true"></i> walimianka@wp.pl | <i className="fa fa-laptop" aria-hidden="true"></i> <a href="http://nordactive.pl">NordActive.pl</a></li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.zbigniews.childImageSharp.fixed} alt="Zbigniew Sobierajski" width="100" />
                    <ul>
                        <li className="name">Zbigniew Sobierajski</li>
                        <li className="guide">przewodnik miejski wrocławski i praski, przewodnik terenowy dolnośląski, przewodnik górski sudecki, pilot wycieczek</li>
                        <li className="language">język: polski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 664 037 039 | <i className="fa fa-at" aria-hidden="true"></i> zbigniew.sobierajski@pbox.pl | <i className="fa fa-at" aria-hidden="true"></i> http://wiaterna.pl/</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.katarzynas.childImageSharp.fixed} alt="Katarzyna Sroka" width="100" />
                    <ul>
                        <li className="name">Katarzyna Sroka</li>
                        <li className="guide">przewodnik miejski wrocławski</li>
                        <li className="language">język: polski, niemiecki</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 516 129 472 | <i className="fa fa-at" aria-hidden="true"></i> katarinasroka@yahoo.com</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.kamilatt.childImageSharp.fixed} alt="Kamila Tajanowicz-Tymura" width="100" />
                    <ul>
                        <li className="name">Kamila Tajanowicz-Tymura</li>
                        <li className="guide">przewodnik miejski wrocławski</li>
                        <li className="language">język: polski, angielski, rosyjski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 504 578 080 | <i className="fa fa-at" aria-hidden="true"></i> tajtym@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.andrzejt.childImageSharp.fixed} alt="Andrzej Talarek" width="100" />
                    <ul>
                        <li className="name">Andrzej Talarek</li>
                        <li className="guide">przewodnik miejski praski, przewodnik terenowy dolnośląski, przewodnik górski sudecki, pilot wycieczek</li>
                        <li className="language">język: polski, czeski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 509 348 737 | <i className="fa fa-at" aria-hidden="true"></i> andrzej@talarek.pl | <i className="fa fa-laptop" aria-hidden="true"></i> <a href="http://www.talarek.pl">Andrzej Talarek - przewodnik po Pradze, Sudetach, Dolnym Śląsku i Ziemi Kłodzkiej</a></li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.malgorzatauk.childImageSharp.fixed} alt="Małgorzata Urlich-Kornacka" width="100" />
                    <ul>
                        <li className="name">Małgorzata Urlich-Kornacka</li>
                        <li className="guide">przewodnik miejski wrocławski, przewodnik terenowy dolnośląski, pilot wycieczek</li>
                        <li className="area">oprowadzanie: Drezno</li>
                        <li className="language">język: polski, niemiecki, rosyjski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 607 239 776 | <i className="fa fa-at" aria-hidden="true"></i> biuro@viawroclaw.com | <i className="fa fa-at" aria-hidden="true"></i> malgorzata.wroclove@gmail.com | <i className="fa fa-laptop" aria-hidden="true"></i> <a href="http://www.viawroclaw.com">Via Wrocław,- przewodnik po Wrocławiu</a></li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.magdaw.childImageSharp.fixed} alt="Magdalena Wąs" width="100" />
                    <ul>
                        <li className="name">Magdalena Wąs</li>
                        <li className="guide">przewodnik miejski wrocławski, pilot wycieczek</li>
                        <li className="language">język: polski, rosyjski, serbsko-chorwacki</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 782 481 198 | <i className="fa fa-at" aria-hidden="true"></i> magda_was@op.pl | <i className="fa fa-laptop" aria-hidden="true"></i> <a href="http://wewroclawyu.blogspot.com">weWroclawYu</a></li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.beataw.childImageSharp.fixed} alt="Beata Wers" width="100" />
                    <ul>
                        <li className="name">Beata Wers</li>
                        <li className="guide">przewodnik miejski wrocławski, pilot wycieczek</li>
                        <li className="language">język: polski, angielski, francuski</li>
                        <li className="contact"> <i className="fa fa-at" aria-hidden="true"></i> beata.wers@wp.pl</li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.wojciechz.childImageSharp.fixed} alt="Wojciech Zalewski" width="100" />
                    <ul>
                        <li className="name">Wojciech Zalewski</li>
                        <li className="guide">przewodnik miejski wrocławski i praski, przewodnik górski sudecki</li>
                        <li className="area">pilotaż: Czechy, Saksonia, Brandenburgia, Słowacja, Wiedeń, Węgry; oprowadzanie: Drezno</li>
                        <li className="language">język: polski, angielski, czeski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 695 650 804 | <i className="fa fa-at" aria-hidden="true"></i> adalbertus@adalbertus.eu | <i className="fa fa-laptop" aria-hidden="true"></i> <a href="https://www.facebook.com/Adalbertus.eu">Adalbertus</a></li>
                    </ul>
                </div>
                <div>
                    <Img fixed={data.marcinz.childImageSharp.fixed} alt="Marcin Załucki" width="100" />
                    <ul>
                        <li className="name">Marcin Załucki</li>
                        <li className="guide">przewodnik miejski wrocławski, pilot wycieczek</li>
                        <li className="language">język: polski</li>
                        <li className="contact"> <i className="fa fa-mobile" aria-hidden="true"></i> 608 336 177 | <i className="fa fa-at" aria-hidden="true"></i> nestor8@wp.pl | <i className="fa fa-laptop" aria-hidden="true"></i> <a href="http://www.nestor8.com">Nestor 8 wycieczki po Wrocławiu</a></li>
                    </ul>
                </div>

            </section>

        </Layout>)
}

export const query = graphql`
 query {
 sebastianb: file(relativePath: { eq: "guides/sebastian_baginski.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 andrzejb: file(relativePath: { eq: "guides/andrzej_borowka.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 agnieszkam : file(relativePath: { eq: "guides/agnieszka_malczewska.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 aldonak : file(relativePath: { eq: "guides/aldona_kowalska.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 } 
 aldonam : file(relativePath: { eq: "guides/aldona_mikucka.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 } 
 andrzejt : file(relativePath: { eq: "guides/andrzej_talarek.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 annam : file(relativePath: { eq: "guides/anna_motyka.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 arkadiuszc : file(relativePath: { eq: "guides/arkadiusz_cencora.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 } 
 beataw : file(relativePath: { eq: "guides/beata_wers.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 kamilatt : file(relativePath: { eq: "guides/kamila_tajanowicz-tymura.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 katarzynas : file(relativePath: { eq: "guides/katarzyna_sroka.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 magdaw : file(relativePath: { eq: "guides/magda_was.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 } 
 malgorzatauk : file(relativePath: { eq: "guides/malgorzata_urlich-kornacka.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 marcinz : file(relativePath: { eq: "guides/marcin_zablocki.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 martam : file(relativePath: { eq: "guides/marta_miniewicz.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 } 
 tadeuszd : file(relativePath: { eq: "guides/tadeusz_dudkowski.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 tatianagf : file(relativePath: { eq: "guides/tatiana_granowska-florea.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 waldemarb : file(relativePath: { eq: "guides/waldemar_brygier.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 wojciechz : file(relativePath: { eq: "guides/wojciech_zalewski.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 zbigniews : file(relativePath: { eq: "guides/zbigniew_sobierajski.jpg" }) {
 id
 childImageSharp {
 fixed(width: 100) {
 ...GatsbyImageSharpFixed
 }
 }
 }
 }
 `;