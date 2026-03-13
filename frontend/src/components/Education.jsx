import { useState } from "react";

const Education = ({ addEducation }) => {
    const [education, setEducation] = useState({
        schoolName: "",
        major: "",
        dateOfCompletetion: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        addEducation(education);

        setEducation({
            schoolName: "",
            major: "",
            dateOfCompletetion: ""
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEducation((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={education.schoolName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="major"
                placeholder="Major"
                value={education.major}
                onChange={handleChange}
                required
            />
            <h4>Date of Completetion: </h4>
            <input
                type="date"
                name="dateOfCompletetion"
                placeholder="Date"
                value={education.dateOfCompletetion}
                onChange={handleChange}
                required
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default Education;