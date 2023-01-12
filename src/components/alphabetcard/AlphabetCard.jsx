import React from 'react'
import './alphabetcard.css'

function AlphabetCard( { alphabet }) {

const playAudio = () => {
  const audio = new Audio(alphabet.mp3)
  audio.play()
}

  return (
    <div id='card-container' onClick={playAudio}>
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