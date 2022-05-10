import React from 'react'
import galleryImage from '../images/meme-image.png'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes))
    }, [])

    const clickEvent = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme((prevMeme) => ({ ...prevMeme, randomImage: allMemes[randomNumber].url }))
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value,
            }
        })
    }

    return (
        <main>
            <form>
                <input
                    id="top-text"
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    id="bottom-text"
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <div onClick={clickEvent} className="btn">
                    Generate meme background
                    <img src={galleryImage} alt="gallery" />
                </div>
            </form>
            <div className="meme--conatainer">
                <h1 className="top">{meme.topText}</h1>
                <h1 className="bottom">{meme.bottomText}</h1>
                <img src={meme.randomImage} alt="meme-bg" />
            </div>
        </main>
    )
}
