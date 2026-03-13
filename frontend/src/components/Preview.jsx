const Preview = ({ cvData}) => {

    return (
        <div className="preview">
            <h2>Personal Details</h2>
            <h4>{cvData.general.name} | {cvData.general.email} | {cvData.general.number}</h4>
            <br />
            <h2>Education Details</h2>
            <ul>
                {cvData.education.map((education, index) => {
                    return (
                        <li key={index} id={education.id}>
                            <h4>{education.schoolName} | {education.major} | {education.dateOfCompletetion}</h4>
                        </li>)
                })}
            </ul>
            <br />
            <h2>Experience Details</h2>
            <ul>
                {cvData.experience.map((experience, index) => {
                    return (
                        <li key={index}>
                            <h4>Orgnization: {experience.companyName} | Position: {experience.position}</h4>
                            <h4>Role Overview: </h4>
                            <h5>{experience.description}</h5>
                            <h4>Join Date: {experience.startDate} | End Date: {experience.endDate}</h4>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Preview;