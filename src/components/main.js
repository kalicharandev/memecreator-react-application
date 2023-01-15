import React from 'react';
import memesData from '../memesData';
export default function Main(){
    // const[memeImage, setMemeImage]= React.useState("http://i.imgflip.com/1bij.jpg");
    const[meme, setMeme] = React.useState({
         topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemesImages, setAllMemeImages] = React.useState(memesData);
    function getImage(){
            const memesArray = allMemesImages.data.memes;
            const randomNumber = Math.floor(Math.random() * memesArray.length);
             const url = memesArray[randomNumber].url
             setMeme(prevMeme => ({
                ...prevMeme, randomImage: url
             }))
             
    }

    return(
        <main>
            <div className='form'>
                <input  type="text"  className='form--input' placeholder='Top Text'/>
                <input  type ="text" className='form--input' placeholder='Buttom Text'/>
                <button onClick={getImage}  className='form--button'>Get a new meme image 🖼</button>
            </div>
         <img src={meme.randomImage} className='meme--image'/>
        </main>
    )
}