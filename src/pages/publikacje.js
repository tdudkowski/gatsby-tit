import React from 'react'
import {graphql} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default ({data}) => {
    console.log(data)
return (
<Layout>
<Banner />
<section>
<h2>Publikacje</h2>
</section>
<section className="books">
<h3>Małgorzata Urlich-Kornacka</h3>
    <div className="book">
        <h4>Dom Handlowy "Feniks", dawny dom towarowy braci Baraschów - Przewodnik</h4>
        <div>Monografia autorstwa Małgorzaty Urlich-Kornackiej poświęcona najstarszemu domowi handlowemu we Wrocławiu – popularnemu i lubianemu „Feniksowi”. Z jego działalnością wiąże się wiele ciekawych historii, anegdot i mitów, które narastały przez dziesiątki lat i sprawiły, że obiekt ten zyskał status wyjątkowej budowli na wrocławskim Rynku. Ciekawostek dotyczących tego obiektu jest tyle, że z planowanej początkowo małej broszurki powstała książka - bogato ilustrowana archiwalnymi pocztówkami, planami architekta Georga Schneidera oraz reklamami z dawnych gazet. Jeśli chcą Państwo dowiedzieć się, skąd pochodzili bracia Baraschowie, założyciele domu towarowego, na czym polegał ich handlowy sukces, co stało się ze szklanym globusem, który zdobił wieżyczkę obiektu od strony Rynku, czy ruchome schody były pierwszymi we Wrocławiu oraz co oznaczało słowo „futerko” w żargonie pracowników „Feniksa” – zapraszamy do lektury!</div>
        <div><Img fluid={data.feniks_okladka.childImageSharp.fluid}  alt="okładka książki" width="100"/><Img fluid={data.feniks_tresc.childImageSharp.fluid}  alt="wnętrze książki" width="100"/></div>
        <ul>
            <li>Małgorzata Urlich-Kornacka "Dom handlowy FENIKS, dawny dom towarowy braci Baraschów" Wydawca: Via Nova; Liczba stron: 96; ISBN: 978-83-64025-42-6</li>
            <li>Na życzenie Kupującego książka z dedykacją i autografem autora!</li>
            <li>Kup przewodnik: Dom Handlowy "Feniks". Przewodnik.</li>
        </ul>
    </div>

    <div className="book">
        <h4>"Śladami Klossa po Wrocławiu" - Przewodnik</h4>
        <div>W jakim lokalu porucznik von Vormann wypowiada hasło o kasztanach z placu Pigalle? Gdzie znajduje się willa profesora Porschatta? A sztab generała von Boldta? W jakiej kamienicy mieszkała Christin Kield? Jak znaleźć mieszkanie radiotelegrafisty Weissa? Weź ze sobą książkę i podążaj tropem Klossa!
Filmowe plenery na licznych zdjęciach archiwalnych i współczesnych, dokładne mapki z zaznaczonymi miejscami, gdzie pracowała ekipa „Stawki większej niż życie” pod kierunkiem Andrzeja Konica i Janusza Morgensterna, ciekawostki z planu, wycinki prasowe z okresu pracy filmowców we Wrocławiu
</div>
        <div><Img fluid={data.kloss_okladka.childImageSharp.fluid}  alt="okładka książki" width="100"/><Img fluid={data.kloss_tresc.childImageSharp.fluid}  alt="wnętrze książki" width="100"/></div>
        <ul>
            <li>Bogdan Bernacki "Śladami Klossa po Wrocławiu", Wydawca: Via Wrocław – Małgorzata Urlich-Kornacka; liczba stron: 56; ISBN: 978-83-941447-3-9</li>
            <li>Na życzenie Kupującego książka z dedykacją i autografem autora!</li>
            <li>Kup przewodnik: Przewodnik "Śladami Klossa po Wrocławiu"</li>
        </ul>
    </div>

    <div className="book">
        <h4>"Na tropie zaginionego Breslau" - Przewodnik na podstawie powieści Marka Krajewskiego.</h4>
        <div>Propozycja dla miłośników powieści kryminalnych oraz zwolenników nieszablonowego zwiedzania Wrocławia. Na przygotowanej trasie znajdują się bowiem nie tylko najczęściej odwiedzane miejsca stolicy Dolnego Śląska, ale również malownicze, nieco zapomniane zakątki. W przewodniku szlakiem radcy kryminalnego wrocławskiej policji Eberharda Mocka nie zabraknie ciekawostek historycznych dotyczących odwiedzanych miejsc, cytatów z powieści, reprodukcji starych kartek pocztowych z kolekcji autorki oraz odwołań do wydarzeń z powieści Marka Krajewskiego. Dzięki temu poczujemy atmosferę przedwojennego Wrocławia, czyli zaginionego Breslau, które – obok Mocka – jest bez wątpienia głównym bohaterem powieści kryminalnych i niniejszej publikacji.
</div>
        <div>
        <Img fluid={data.mock_okladka.childImageSharp.fluid}  alt="okładka książki" width="100"/>
        <Img fluid={data.mock_tresc.childImageSharp.fluid}  alt="wnętrze książki" width="100"/></div>
        <ul>
            <li>Dostępna jest wersja nowa, poszerzona.</li>
            <li>Przewodnik opublikowany jest również w wersji niemieckiej "Schauergeschichten aus Breslau".</li>
            <li>Kup przewodnik: Mock. Przewodnik. Wrocław.</li>
        </ul>
    </div>

    <div className="book">
        <h4>Przewodnik po Dolnym Śląsku. 10 najpiękniejszych wycieczek</h4>
        <div>Zamki, pałace, oryginalne świątynie, wielkie klasztory, zabytki techniki, gigantyczne sztolnie z okresu drugiej wojny światowej – to wszystko można spotkać na Dolnym Śląsku. Ale nie tylko! Na turystów czekają tutaj góry, jaskinie, formacje skalne, rezerwaty przyrody, ogrody i parki. Zapraszamy! Warto odkryć i poznać Dolny Śląsk. Przewodnik prowadzi przez najpiękniejsze zakątki regionu. Dzięki starannie opracowanym trasom wycieczek i specjalnie wybranym obiektom można poznać największe atrakcje Dolnego Śląska.</div>
        <div>
        <Img fluid={data.muk_dlnslask_okladka.childImageSharp.fluid}  alt="okładka książki" width="100"/>
        <Img fluid={data.muk_dlnslask_tresc.childImageSharp.fluid}  alt="wnętrze książki" width="100"/>
                </div>
        <ul>
            <li>Autorzy: Małgorzata Urlich-Kornacka (tekst), Stanisław Klimek (fotografie); Format: 12,5 cm x 21,5 cm, Objętość: 216 str.</li>
            <li>Kup przewodnik: Dolny Śląsk. Najpiękniejsze wycieczki. Przewodnik</li>
                    </ul>
    </div>

    <div className="book">
        <h4>Przewodnik po Wrocławiu</h4>
        <div>Idealny przewodnik dla wszystkich, którzy będąc we Wrocławiu przez jeden, dwa lub trzy dni chcą zobaczyć najpiękniejsze zakątki stolicy Dolnego Śląska. Ciekawy tekst, pełen informacji i anegdot oraz kolorowe zdjęcia i reprodukcje starych pocztówek, pozwolą w sposób łatwy i przyjemny zapoznać się z najciekawszymi zabytkami Wrocławia. Dodatkowym atutem jest mapka, na której zaznaczono opisane obiekty. Przewodnik dostępny w kilku wersjach językowych stanowi także idealny prezent dla gości odwiedzających Wrocław.</div>
        <div>
        <Img fluid={data.mukwroclaw_okladka.childImageSharp.fluid}  alt="okładka książki" width="100"/>
        <Img fluid={data.mukwroclaw_okladki.childImageSharp.fluid}  alt="książki" width="100"/>
        </div>
        <ul>
            <li>Dostępne wersje językowe: polska, angielska, niemiecka, rosyjska, włoska, francuska, czeska, hiszpańska. Wydanie nowe, uaktualnione.</li>
            <li>Kup przewodnik: Przewodnik po Wrocławiu - Idealny dla wszystkich!</li>
                    </ul>
    </div>

    <h3>Marcin Załucki</h3>

    <div className="book">
        <h4>Jaś i Małgosia na tropie tajemnic Wrocławia</h4>
        <div>Książeczka rozwija pomysły zaprezentowane w pierwszym tomie serii. Czytelnik znajdzie tu opisy najciekawszych zabytków Wrocławia (podane w formie krótkich wypowiedzi), znakomite zdjęcia przedstawiające piękno stolicy Dolnego Śląska oraz miejską grę terenową wplecioną w opowieści Jasia i Małgosi. Książka ta, jest więc jednocześnie: przewodnikiem po Wrocławiu, komiksem, albumem, zabawą animacyjną dla całej rodziny.</div>
        <div>
        <Img fluid={data.zalucki_natropie.childImageSharp.fluid}  alt="okładka książki" width="100"/>
        <Img fluid={data.zalucki_poznaja.childImageSharp.fluid}  alt="okładka książki" width="100"/></div>
        <ul>
            <li>Zamówienia: www.nestor8.com.pl</li>
                   </ul>
    </div>
<h3>Zbigniew Sobierajski</h3>
    <div className="book">
        <h4>Legendy Karkonoszy</h4>
        <div><p>Zawierają 8 krótkich legend związanych z wymienionym w tytule najwyższym pasmem górskim Sudetów. Legendy w większości odnoszą się do postaci Ducha Gór - Karkonosza a także miejsc z nim związanych, jak Krucze Skały czy Czerwona Jama w Szklarskiej Porębie czy skały Trzy Świnki na zboczach Szrenicy. Oczywiście nie mogło zabraknąć opowieści o Kunegundzie z zamku Chojnik.</p>
            <p> Legendy:</p>
            <ul>
                <li>O Karkonoszu, który pogodą włada</li>
                <li>Jak Karkonosz z Waldkiem Kędziorem w kręgle grał</li>
                <li>O okrutnej Kunegundzie i dzielnym rycerzu</li>
                <li>Jak diabeł kamienny most budował</li>
                <li>O Karkonoszu, który smoka Kraka pokonał</li>
                <li>O Szklanej Pani, która piasek w szkło zamieniała</li>
                <li>Jak Karkonosz rozbójników w kruki zamienił</li>
                <li>Jak Karkonosz chciwego chłopa ukarał</li>
            </ul>
         </div>
        <div><Img fluid={data.sobierajski_legendy_karkonoszy.childImageSharp.fluid}  alt="okładka książki"/></div>
        <ul>
            <li>Pomysł i opracowanie: Marta Miniewicz i Zbigniew Sobierajski. Ilustracje: Paulina Mager. Teksty legend: Marta Miniewicz. Opracowanie graficzne i skład: Leszek Sulich. ISBN 978-83-927900-1-3</li>
            <li>Zamówienia: www.wiaterna.pl</li>
                    </ul>
    </div>


    <div className="book">
        <h4>Legendy Jeleniej Góry</h4>
        <div><p>To kolejna pozycja pokazująca baśniowy świat Sudetów. Tym razem 7 legend związanych z Jelenią Górą.</p>
        <ul>
            <li>O mężnym Bolesławie, który Jelenią Górę założył</li>
            <li>O pięknym jeleniu, od którego nazwa miasta pochodzi</li>
            <li>O skąpym golibrodzie, który skarb znalazł</li>
            <li>O latającym proroku Rischmannie, który przyszłość przepowiadał</li>
            <li>O lekkomyślnych czeladnikach, którzy miasto spalili</li>
            <li>O biednej zielarce, która Karkonosza nie posłuchała</li>
            <li>O pięknej dziewczynie we dworze uwięzionej.</li>
        </ul>
       </div>
        <div><Img fluid={data.sobierajski_legendy_jgory.childImageSharp.fluid}  alt="okładka książki" width="100"/></div>
        <ul>
            <li>Pomysł i opracowanie: Zbigniew Sobierajski i Marta Miniewicz. Ilustracje: Paulina Mager. Teksty legend: Marta Miniewicz. Opracowanie graficzne i skład: Leszek Sulich. ISBN 978-83-927900-2-0</li>
            <li>Zamówienia: www.wiaterna.pl</li>
                    </ul>
    </div>

    <h3>Marta Miniewicz</h3>

    <div className="book">
        <h4>Okolice Wrocławia Przewodnik dla każdego</h4>
        <div>Propozycje wycieczek pieszych i rowerowych. Prywatne muzea i rezerwaty przyrody, atrakcyjne miejsca do wypoczynku nad wodą i w górach, piękne budowle oraz ich nietuzinkowych właścicieli i fundatorów. Każdy odkryje tu coś dla siebie, i ludzie młodzi, aktywni, żądni mocnych wrażeń, i ci starsi, spragnieni relaksu.</div>
        <div>
        <Img fluid={data.miniewicz_oklicewroclawia1.childImageSharp.fluid}  alt="okładka książki" width="100"/>
        <Img fluid={data.miniewicz_oklicewroclawia2.childImageSharp.fluid}  alt="okładka książki" width="100"/>
        </div>
        
        <ul>
            <li>Zamówienia: <a href="http://www.xn--koowrocek-rub.pl">Kołowrocek.pl</a></li>
                   </ul>
    </div>

    <div className="book">
        <h4>Spacerkiem po Powiecie Wrocławskim - czyli o czym szumią drzewa</h4>
        <div>Opisy drzew, które często rosną obok naszych domów, ozdabiają przypałacowe parki czy też tworzą zabytkowe aleje wzdłuż wiejskich dróg. Na terenie powiatu wrocławskiego specjalną ochroną prawną jako pomniki przyrody otoczonych zostało ponad 120 obiektów (drzew, grup drzew i alei), które można podziwiać przemierzając szlaki piesze lub rowerowe, zdobywając szczyt Ślęży czy spacerując leśnymi ścieżkami nad brzegami Bystrzycy i Odry. W opisy drzew wpleciona jest mitologia grecka i słowiańska, rodzime legendy, a nawet horoskop "drzewny". Podczas rodzinnych spacerów po powiecie wrocławskim można poznać wiele pięknych historii, wystarczy przystanąć i posłuchać, o czym szumią drzewa...</div>
        <div>
        <Img fluid={data.miniewicz_drzewa1.childImageSharp.fluid}  alt="okładka książki" width="100"/>
        <Img fluid={data.miniewicz_drzewa2.childImageSharp.fluid}  alt="okładka książki" width="100"/>
        </div>
        <ul>
            <li>Fotografie: Zbigniew Sobierajski</li>
            <li>Zamówienia: <a href="http://www.xn--koowrocek-rub.pl">Kołowrocek.pl</a></li>
                  </ul>
    </div>

    <div className="book">
        <h4>Legendy dolnośląskie</h4>
        <div>Rozkładane kolorowe mapki dla dzieci pozwalają poznać najciekawsze legendy związane z Wrocławiem i Dolnym Śląskiem oraz odnaleźć wrocławskie krasnoludki</div>
        <div>
            <Img fluid={data.miniewicz_krasnoludkowamapa.childImageSharp.fluid}  alt="okładka książki" width="100"/>
            <Img fluid={data.miniewicz_legendyslezanskie.childImageSharp.fluid}  alt="okładka książki" width="100"/>
            <Img fluid={data.miniewicz_legendyswidnickie.childImageSharp.fluid}  alt="okładka książki" width="100"/>
            <Img fluid={data.miniewicz_legendywroclawskieot.childImageSharp.fluid}  alt="okładka książki" width="100"/>
            <Img fluid={data.miniewicz_legendywroclawskiesm.childImageSharp.fluid}  alt="okładka książki" width="100"/>
        </div>
        <ul>
            <li>Zamówienia: <a href="http://www.xn--koowrocek-rub.pl">Kołowrocek.pl</a></li>
             </ul>
    </div>
    <p>

</p>
</section>
       
</Layout>)
}

export const pageQuery = graphql`
  query {
    feniks_okladka: file(relativePath: { eq: "books/feniks_okladka.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    feniks_tresc : file(relativePath: { eq: "books/feniks_tresc_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kloss_okladka : file(relativePath: { eq: "books/kloss_okladka_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kloss_tresc : file(relativePath: { eq: "books/kloss_tresc_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mock_okladka : file(relativePath: { eq: "books/mock_okladka_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mock_tresc : file(relativePath: { eq: "books/mock_tresc_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      muk_dlnslask_okladka : file(relativePath: { eq: "books/muk-dolnyslask_okladka_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      muk_dlnslask_tresc : file(relativePath: { eq: "books/muk-dolnyslask_tresc_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mukwroclaw_okladka : file(relativePath: { eq: "books/muk_wroclaw_okladka_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mukwroclaw_okladki : file(relativePath: { eq: "books/muk_wroclaw_okladki_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      zalucki_natropie : file(relativePath: { eq: "books/marcinjim_natropietajemnic.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zalucki_poznaja : file(relativePath: { eq: "books/marcinjim_poznajawroclaw.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      sobierajski_legendy_karkonoszy : file(relativePath: { eq: "books/sobierajski_legendykarkonoszy.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sobierajski_legendy_jgory : file(relativePath: { eq: "books/sobierajski_legendyjeleniejgory.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     

      miniewicz_oklicewroclawia1 : file(relativePath: { eq: "books/okolice_wroclawia1_small.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miniewicz_oklicewroclawia2 : file(relativePath: { eq: "books/okolice_wroclawia2_small.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      miniewicz_drzewa1 : file(relativePath: { eq: "books/drzewa1_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miniewicz_drzewa2 : file(relativePath: { eq: "books/drzewa2_small.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miniewicz_krasnoludkowamapa : file(relativePath: { eq: "books/marta_krasnoludkowamapa.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miniewicz_legendyslezanskie : file(relativePath: { eq: "books/marta_legendyslezanskie.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miniewicz_legendyswidnickie : file(relativePath: { eq: "books/marta_legendyswidnickie.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miniewicz_legendywroclawskieot : file(relativePath: { eq: "books/marta_legendywroclawskieot.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miniewicz_legendywroclawskiesm : file(relativePath: { eq: "books/marta_legendywroclawskiesm.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
}
`;
