import React from 'react'
import './home.css'
import ConsonantsData from '../../data/ConsonantsData'
import ConsonantCard from '../../components/consonant/ConsonantCard'
import VowelData from '../../data/VowelsData'
import VowelCard from '../../components/vowel/VowelCard'
import Info from '../../components/info/Info'

import { useState } from 'react'

function Home() {
  const [showConsonants, setShowConsonants] = useState(false)
  const [showVowles, setShowVowels] = useState(false)
  const [showInfo, setShowInfo] = useState(true)

  const clickConsonants = e => {
    setShowConsonants(true)
    setShowVowels(false)
    setShowInfo(false)
  }

  const clickVowels = e => {
    setShowVowels(true)
    setShowConsonants(false)
    setShowInfo(false)
  }

  const clickInfo = e => {
      setShowVowels(false)
      setShowConsonants(false)
      setShowInfo(true)
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
          <button onClick={clickInfo}>Info</button>
        </div>
      </div>
      {showConsonants && (<div className='components-container'>
        {ConsonantsData.map((alphabet) => (
          <ConsonantCard
            alphabet={alphabet}
          /> ))}        
        </div> )             
      }  
      {showVowles && (
        <div className='components-container'>
          {VowelData.map((vowel) => (
            <VowelCard 
              vowel={vowel}
            />
          ))}
        </div>
      )}
      
      {showInfo && (<div className='components-container'><Info /></div>)}
      </div>
  )
}

export default Home

