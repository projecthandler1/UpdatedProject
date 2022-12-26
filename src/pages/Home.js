import React from 'react'
import Faqs from '../components/Home/Faqs'
import GlassMorphism from '../components/Home/GlassMorphism'
import FirstIm from '../components/Home/FirstIm'
import Sender from '../components/Home/Sender'
import Info from '../components/Home/Info'

function Home() {
  return (
    <div>
    <FirstIm/>
    <Sender/>
    <Info/>
    <GlassMorphism/>
    <Faqs/>
    </div>
  )
}

export default Home