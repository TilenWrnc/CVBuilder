import { useState } from 'react'
import './App.css'
import {Logo, GeneralInformation, Education, ProfessionalExperience, BlankPaper} from'./components.jsx'


function App() {

  return (
    <div className="container">
      <div className="intro">
        <Logo />
      </div>
      <div className="inputs">
        <GeneralInformation/>
        <Education/>
        <ProfessionalExperience/>
      </div>
      <div className="blank">
        <BlankPaper/>
      </div>
    </div>
  )
    
  
}

export default App
