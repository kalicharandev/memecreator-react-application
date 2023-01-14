import React from 'react';
import memesData from '../memesData';
export default function Main(){
    const[memeImage, setMemeImage]= React.useState("");
    function getImage(){
            const memesArray = memesData.data.memes;
            const randomNumber = Math.floor(Math.random() * memesArray.length);
             setMemeImage(memesArray[randomNumber].url);
    }

    return(
        <main>
            <div className='form'>
                <input  type="text"  className='form--input' placeholder='Top Text'/>
                <input  type ="text" className='form--input' placeholder='Buttom Text'/>
                <button onClick={getImage}  className='form--button'>Get a new meme image 🖼</button>
            </div>
         <img src={memeImage} className='meme--image'/>
        </main>
    )
}