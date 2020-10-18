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
    <form action="">
        <label htmlFor="name">Nazwisko lub pseudonim</label>
        <input type="text"/>
        <label htmlFor="mail">Adres e-mail</label>
        <input type="mail"/>
        <label htmlFor="title">Tytuł wiadomości</label>
        <input type="text"/>
        <label htmlFor="info">Wiadomość <span>(wymagane)</span></label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div>
        <button>Wyczyść</button> <button>Wyślij</button></div>
    </form>
</section>
       
</Layout>)
}
