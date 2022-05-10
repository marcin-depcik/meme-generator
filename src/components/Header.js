import React from 'react'
import lolImage from '../images/lol-image.png'

export default function Header() {
    return (
        <header>
            <h1>MemeGenerator</h1>
            <img src={lolImage} alt="lol" />
        </header>
    )
}
