import React from 'react'
import './home.css'
import ConsonantsData from '../../data/ConsonantsData'
import ConsonantCard from '../../components/consonant/ConsonantCard'
import VowelData from '../../data/VowelsData'
import VowelCard from '../../components/vowel/VowelCard'

import { useState } from 'react'

function Home() {
  const [showConsonants, setShowConsonants] = useState(false)
  const [showVowles, setShowVowels] = useState(false)

  const clickConsonants = e => {
    setShowConsonants(true)
    setShowVowels(false)
  }

  const clickVowels = e => {
    setShowVowels(true)
    setShowConsonants(false)
  }

  return (
    <div id="home-page">
      <div id='header'>
        <div id='header-title'>TIBETAN ALPHABETS</div>
        <div id='header-caption'>Click on each alphabet to hear its pronounciation</div>
      </div>
      <div id='buttons'>
        <div id='consonants'>
          <button onClick={clickConsonants}>Consonants</button>
        </div>
        <div id='vowels'>
          <button onClick={clickVowels}>Vowels</button>
        </div>
        <div>
          <button>Info</button>
        </div>
      </div>
      {showConsonants && (<div id='alphabets-container'>
        {ConsonantsData.map((alphabet) => (
          <ConsonantCard
            alphabet={alphabet}
          /> ))}        
        </div> )             
      }  
      {showVowles && (
        <div id='alphabets-container'>
          {VowelData.map((vowel) => (
            <VowelCard 
              vowel={vowel}
            />
          ))}
        </div>
      )}
      </div>
  )
}

export default Home

