import React from 'react'
import './home.css'
import AlphabetsData from '../../data/AlphabetsData'
import AlphabetCard from '../../components/alphabetcard/AlphabetCard'

function Home() {
  return (
    <div id="home-page">
      <div id='header'>
        <div id='header-title'>Tibetan Alphabet</div>
        <div id='header-caption'>Click on each alphabet to hear its pronounciation</div>
      </div>
      <div id='alphabets-container'>
        {AlphabetsData.map((alphabet) => (
          <AlphabetCard
            alphabet={alphabet}
          /> ))}        
        </div>    
      </div>
  )
}

export default Home