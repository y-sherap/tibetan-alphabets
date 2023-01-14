import React from 'react'

function VowelCard({vowel}) {
    const playAudio = () => {
        const audio = new Audio(vowel.mp3)
        audio.play()
      }
      
        return (
          <div id='card-container' onClick={playAudio}>
            <div id='card-image'>
              <img src={vowel.image} alt='alphabet'/>
            </div>
            <div id='card-title'>
              {vowel.name}
            </div>
            <div id='card-phonetics'>
              {vowel.phonetics}
            </div>
          </div>
        )
      }

export default VowelCard