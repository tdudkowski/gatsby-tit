import React from 'react'
import {graphql} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default ({data}) => {
    // console.log(data)
return (
<Layout>
<Banner />
<section>
<h2>Tropem naszego dziedzictwa - przewodnik</h2>
</section>
<section>
<p><em>„Tropem naszego dziedzictwa. Kąty Wrocławskie, Kobierzyce, Żórawina, Siechnice, Domaniów”</em> - przewodnik po gminach leżących w sąsiedztwie lub tuż przy granicach Wrocławia.</p>
<p>W przewodniku oprócz wizytówki każdej gminy (czyli kilku informacji ogólnych, historii i ciekawostek historycznych) znajdują się dokładniejszy opis jednego wybranego zabytku lub wydarzenia, czyli historia jednego obiektu oraz nasza propozycja tras rowerowych, wytyczona w taki sposób, aby poznać najciekawsze miejsca na terenie opisywanej gminy.</p>
<p>Wybraliśmy też miejsca na aktywne i rodzinne zwiedzanie. W przewodniku znajduje się też zbiór pocztówek ze wszystkich opisywanych gmin oraz naklejki dla najmłodszych do oznaczania odwiedzonych już miejsc.</p>
<p>Kto jest autorem?<br/>
teksty napisała Marta Miniewicz<br/>
zdjęcia wykonał Zbigniew Sobierajski<br/>
</p>
<p>
Ile stron ma przewodnik?<br/>
96 stron z kolorowymi zdjęciami + naklejki + pocztówki</p>
</section>

<section className="cards">
  <a href="http://tdudkowski.usermd.net/files/tuitam/Tropem_naszego_dziedzictwa-ebook.pdf"><Img fluid={data.okladka.childImageSharp.fluid} className="cover" alt="okładka przewodnika" /><div>ebook do pobrania<br />PDF 12 MB</div></a></section>
       
       <section>
           <hr/>
           <p>Wydawnictwo współfinansowane jest ze środków UE w ramach realizacji projektu grantowego LGD Lider A4 pod nazwą "Dbamy o nasze dziedzictwo, w przestrzeni obszaru Lider A4 i działaniach mieszkańców!" w ramach zadania grantowego pn. "Tropem naszego dziedzictwa - nieznane miejsca, ciekawe opowieści, niezwykli ludzie - przewodnik po obszarze LGD LIder A4" realizowanego w ramach poddziałania 19.2 "Wsparcie na wdrażanie operacji w ramach strategii rozwoju lokalnego kierowanego przez społeczność" objętego Programem Rozwoju Obszarów Wiejskich na lata 2014-2020</p>
          <Img fluid={data.logo_tropem.childImageSharp.fluid}  alt="logo projektu" width="484" className="project-logo" />
           <hr/>
       </section>
</Layout>)
}

export const pageQuery = graphql`
  query {
    okladka: file(relativePath: { eq: "tropem-naszego-dziedzictwa-okladka.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo_tropem: file(relativePath: { eq: "logo-tropem-dziedzictwa.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
`;