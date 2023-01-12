import React from 'react'
import './alphabetcard.css'

function AlphabetCard( { alphabet }) {
  return (
    <div id='card-container'>
      <div id='card-image'>
        <img src={alphabet.image} alt='alphabet'/>
      </div>
      <div id='card-title'>
        {alphabet.name}
      </div>
    </div>
  )
}

export default AlphabetCard