import React from 'react';
export default function Main(){
    // const[memeImage, setMemeImage]= React.useState("http://i.imgflip.com/1bij.jpg");
    const[meme, setMeme] = React.useState({
         topText: "",
         bottomText: "",
         randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemesImages, setAllMemeImages] = React.useState([]);
    React.useEffect(() => {
        async function getMemes(){
        const response = await fetch("https://api.imgflip.com/get_memes")
        const data =   await response.json()
        setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])
    
    
    function getImage(){
            const randomNumber = Math.floor(Math.random() * allMemesImages.length);
             const url = allMemesImages[randomNumber].url
             setMeme(prevMeme => ({
                ...prevMeme, randomImage: url
             }))
             
    }

    function handleChange(event){
       const{name, value} = event.target
       setMeme(prevMeme  => ({
        ...prevMeme,
        [name] : value
       }))
    }

    return(
        <main>
            <div className='form'>
                <input 
                 type="text"  
                 className='form--input' 
                 placeholder='Top Text'
                 onChange={handleChange}
                 name = "topText"
                 value={meme.topText}
                 />
                <input 
                 type ="text" 
                 className='form--input' 
                 placeholder='Buttom Text'
                 onChange={handleChange}
                 name = "bottomText"
                 value={meme.bottomText}

                 />
                <button onClick={getImage}  className='form--button'>Get a new meme image 🖼</button>
            </div>
            
        <div className='meme'>
         <img src={meme.randomImage} className='meme--image'/>
         <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
         </div>
        </main>
    )
}