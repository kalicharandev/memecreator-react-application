import React from 'react';

export default function Header(){
    return(
        <div className='header'>
            <img src ={process.env.PUBLIC_URL + '/images/troll-face.png'}
            className='header--image'
            />
            <h2 className='header--title'>Meme generator</h2>
        </div>
    )
}