import React from 'react'
import './App.css'
import HelloWorld from './components/helloWorld/HelloWorld.jsx'
import AnimalGallery from './components/animalgalery/AnimalGallery.jsx'
import ColorList from './components/colorList/ColorList.jsx'
import WeekDays from './components/weekDays/WeekDays.jsx'
import GreetingCard from './components/greetingCard/GreetingCard.jsx'
import FamousCities from './components/famousCities/FamousCities.jsx'
import SeasonColors from './components/seasonColors/SeasonColors.jsx'
import SimpleMenu from './components/simpleMenu/SimpleMenu.jsx'
function App() {
  return (
    <div>
      <HelloWorld />
      <br />
      <AnimalGallery />
      <br />
      <ColorList />
      <br />
      <WeekDays />
      <br />
      <GreetingCard />
      <br />
      <FamousCities />
      <br />
      <SeasonColors />
      <br />
      <SimpleMenu />
      <br />



    </div>
  )
}

export default App