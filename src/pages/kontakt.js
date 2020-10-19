import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default () => {
    // console.log(data)
return (
<Layout>
    <Banner />
    <section>
<h2>Kontakt</h2>
</section>
<section>
    <form action=""
className="form"
name="contact"
method="POST"
data-netlify="true"
netlify-honeypot="bot-field">
<input type="hidden" name="bot-field" aria-label="hidden field" />
<input type="hidden" name="form-name" value="contact" aria-label="hidden field"/>

        <label htmlFor="name" aria-label="name">Nadawca</label>
        <input type="text" id="name" name="name"/>
        <label htmlFor="email">Adres e-mail</label>
        <input
  type="email"
  // id="email"
  name="_replyto"
  id="_replyto"
  aria-label="email"
/>
        <label htmlFor="title">Tytuł wiadomości</label>
        <input type="text" id="title" name="title"/>
        <label htmlFor="message">Wiadomość <span>(wymagane)</span></label>
        <textarea
  name="message"
  id="message"
  rows="10"
  cols="30"
  aria-label="text here"
  required
/>
<div>
        <button type="submit" className="btn">Wyślij wiadomość / Send</button>
            <input
  type="reset"
  value="Wyczyść formularz / Clear"
  className="btn"
  aria-label="clear button"
/>
</div>
    </form>
</section>
       
</Layout>)
}
