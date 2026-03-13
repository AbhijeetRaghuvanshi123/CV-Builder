import { useState } from 'react'
import './App.css'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import GeneralInfo from './components/GeneralInfo.jsx'
import Preview from './components/Preview.jsx'  

function App() {
  const [cvData , setCvData] = useState({
    general : {
      name : "",
      email : "",
      phone : ""
    },

    education : [],
    experience: []
  })

  const addGeneralInfo = (value) => {
    setCvData((prev) => ({
      ...prev,
      general: value
    }))
  }

  const addEducation = (value) => {
    setCvData((prev) => ({
      ...prev,
      education: [...prev.education, value]
    }))
  }

  const addExperience = (value) => {
    setCvData((prev) => ({
      ...prev,
      experience: [...prev.experience, value]
    }))
    console.log(cvData);
  }

  return (
    <div className='container'>
      <div className="form-section">
        <h2>General Information</h2>
        <GeneralInfo addGeneralInfo={addGeneralInfo}/>
        <h2>Education Details</h2>
        <Education addEducation={addEducation}/>
        <h2>Experience Details</h2>
        <Experience addExperience={addExperience}/>
      </div>
      
      <div className="preview-section">
        <h2>Preview</h2>
        <Preview cvData={cvData}/>
      </div>
    </div>
  )
}

export default App
