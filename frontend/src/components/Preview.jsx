const Preview = ({ cvData }) => {
  return (
    <div className="preview">

      <h1>{cvData.general.name}</h1>

      <div className="contact">
        {cvData.general.email} | {cvData.general.phone}
      </div>

      <h2>Education</h2>

      <ul>
        {cvData.education.map((education) => (
          <li key={education.id}>
            <div className="education-title">
              {education.major} — {education.schoolName}
            </div>

            <div className="education-date">
              {education.dateOfCompletion}
            </div>
          </li>
        ))}
      </ul>

      <h2>Experience</h2>

      <ul>
        {cvData.experience.map((experience) => (
          <li key={experience.id}>
            <div className="exp-title">
              {experience.position}
            </div>

            <div className="exp-company">
              {experience.companyName}
            </div>

            <div className="exp-description">
              {experience.description}
            </div>

            <div className="exp-date">
              {experience.startDate} — {experience.endDate}
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Preview;