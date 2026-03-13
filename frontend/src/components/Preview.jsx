const Preview = ({cvData}) => {
    return (
        <div className="preview">
            <h2>Personal Details</h2>
            <h4>{cvData.general.name} | {cvData.general.email} | {cvData.general.number}</h4>
            <br />
            <h2>Education Details</h2>
            {cvData.education.map((education , index) => {
                return (<h4 key={index}>{education.schoolName} | {education.major} | {education.dateOfCompletetion}</h4>)
            })}
            <br />
            <h2>Experience Details</h2>
            {cvData.experience.map((experience, index) => {
                return (
                    <div key={index}>
                        <h4>Orgnization: {experience.companyName} | Position: {experience.position}</h4>
                        <h4>Role Overview: </h4>
                        <h5>{experience.description}</h5>
                        <h4>Join Date: {experience.startDate} | End Date: {experience.endDate}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Preview;