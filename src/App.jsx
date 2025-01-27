import { useState } from 'react'
import './App.css'
import {Logo, GeneralInformation, Education, ProfessionalExperience, BlankPaper} from'./components.jsx'


function App() {
  const [showMoreExperience, setShowMoreExperience] = useState(false);
  const [showMoreEducation, setshowMoreEducation] = useState(false);
  const [showMoreGeneralInfo, setshowMoreGeneralInfo] = useState(false);

  const [experience, setExperience] = useState({
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      jobTasks: "",
  });
  const [education, setEducation] = useState({
      degree: "",
      school: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
  })
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phoneNum: "",
    country: "",
})

  function handleShowMore(type) {
      if (type == "experience") {
        setShowMoreExperience(!showMoreExperience)
      } else if (type == "education") {
        setshowMoreEducation(!showMoreEducation)
      } else if (type == "generalInfo") {
        setshowMoreGeneralInfo(!showMoreGeneralInfo);
      }
  }

  const [submitedExperience, setSubmitedExperience] = useState(false);
  const [submitedEducation, setSubmitedEducation] = useState(false);
  const [submitedGeneralInfo, setSubmitedGeneralInfo] = useState(false);


  function handleSubmit(event, type) {
      event.preventDefault(); 
      const formData = new FormData(event.target);

      if (type == "experience") {
        setExperience({
          jobTitle: formData.get("jobTitle"),
          companyName: formData.get("companyName"),
          startDate: formData.get("startDateExperience"),
          endDate: formData.get("endDateExperience"),
          jobTasks: formData.get("jobTasks"),
          });
        setSubmitedExperience(!submitedExperience);
      } else if (type == "education") {
        setEducation({
          degree: formData.get("degree"),
          school: formData.get("school"),
          city: formData.get("city"),
          country: formData.get("countryEducation"),
          startDate: formData.get("startDateEducation"),
          endDate: formData.get("endDateEducation"),
         });
         setSubmitedEducation(!submitedEducation);
      } else if (type == "generalInfo") {
        setGeneralInfo({
          fullName: formData.get("name"),
          email: formData.get("email"),
          phoneNum: formData.get("phoneNumber"),
          country: formData.get("country"),
          });
        setSubmitedGeneralInfo(!submitedGeneralInfo);
      }
  }

  function handleEdit(type) {
    if (type === "generalInfo") {
      setSubmitedGeneralInfo(!submitedGeneralInfo);
    } else if (type === "education") {
      setSubmitedEducation(!submitedEducation);
    } else if (type === "experience") {
      setSubmitedExperience(!submitedExperience);
    }
  }

  return (
    <div className="container">
      <div className="intro">
        <Logo />
      </div>
      <div className="inputs">
        <GeneralInformation
          showMore = {showMoreGeneralInfo}
          submited = {submitedGeneralInfo}
          generalInfo = {generalInfo}
          onShowMore = {() => handleShowMore("generalInfo")}
          onSubmit ={(e) => handleSubmit(e, "generalInfo")}
          onEdit = {() => handleEdit("generalInfo")}
        />
        <Education
          showMore = {showMoreEducation}
          submited = {submitedEducation}
          education = {education}
          onShowMore = {() => handleShowMore("education")}
          onSubmit ={(e) => handleSubmit(e, "education")}
          onEdit = {() => handleEdit("education")}
        />
        <ProfessionalExperience
          showMore = {showMoreExperience}
          submited = {submitedExperience}
          experience = {experience}
          onShowMore = {() => handleShowMore("experience")}
          onSubmit ={(e) => handleSubmit(e, "experience")}
          onEdit = {() => handleEdit("experience")}
        />
      </div>
      <div className="blank">
        <BlankPaper 
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          submitedGeneralInfo = {submitedGeneralInfo}
          submitedEducation = {submitedEducation}
          submitedExperience = {submitedExperience}
        />
      </div>
    </div>
  )
}

export default App
