import React from "react";
// import { Link } from "gatsby"
// import Logo from "../images/logo.png";
// import Navbar from "./Navbar/Navbar"


const playlist = [{
    title: "Opowiem Ci o Wrocławiu - wstęp",
    artist: "Marta Miniewicz",
    src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/00_Opowiem_Ci_o_Wroclawiu.mp3",
},
{
    title: "Alzheimer",
    artist: "Małgorzata Urlich-Kornacka",
    src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/01_Malgorzata_Urlich-Kornacka_Alzheimer.mp3",
}
]

let currentAudio = {
    title: "Opowiem Ci o Wrocławiu - wstęp",
    artist: "Marta Miniewicz",
    src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/00_Opowiem_Ci_o_Wroclawiu.mp3",
}

const Playlist = () => {


    const playlistList = () => {
        const number = playlist.length

        const htmlList = document.querySelector(".audio")
        const ulEl = document.createElement("ul")
        for (let i = 0; i < number; i++) {
            const liEl = document.createElement("li")
            liEl.textContent = playlist[i].artist
            console.log(playlist[i].artist)
            // console.log("OK")
            ulEl.appendChild(liEl);
        }

        // htmlList.appendChild(ulEl)
        // console.log(htmlList)
        // console.log("HELO")
    }



    const myFunction = (artist, title, src) => {
        console.log(artist, title, src)
    }

    return (
        <ul>
            {playlist.map(({ key, title, artist, src }) => (
                <li key={key}>
                    <button onClick={() => myFunction(artist, title, src)}>{artist} <em>{title}</em></button>
                </li>
            ))}
        </ul>
    )
}

export default Playlist


export { currentAudio }


