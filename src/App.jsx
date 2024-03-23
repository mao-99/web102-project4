import { useEffect, useState } from 'react'
import Card from './components/card'
import SideNav from './components/sideNavs'
import './App.css'



function App() {
  
  return (
    <>
      <div className='body'>
        <div className="sideNav">
          <SideNav title="History"></SideNav>
        </div>
        <div className="mainContent">
          <h1>Catrivia!!</h1>
          <h3><em>...Indulge yourself by delving into this cat awesomeness...</em></h3>
          <Card breedName={""} imageLink={""} weight={""} origin={""} lifeSpan={""}/>
          <button>&#8634;</button>
        </div>
        <div className="sideNav">
          <SideNav title="Ban List"></SideNav>
        </div>        
      </div>
    </>
  )
}

export default App
