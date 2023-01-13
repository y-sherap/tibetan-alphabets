import React from 'react'
import './home.css'
import ConsonantsData from '../../data/ConsonantsData'
import ConsonantCard from '../../components/consonant/ConsonantCard'

import { useState } from 'react'

function Home() {
  const [showConsonants, setShowConsonants] = useState(false)

  const clickConsonants = e => {
    setShowConsonants(true)
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
          <button>Vowels</button>
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
      </div>
  )
}

export default Home