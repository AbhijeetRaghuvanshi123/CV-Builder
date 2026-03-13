import { useState } from "react";
import { nanoid } from "nanoid";

const Education = ({ addEducation }) => {
    const [education, setEducation] = useState({
        schoolName: "",
        major: "",
        dateOfCompletion: "",
        id: nanoid()
    })

    const [educationList, setEducationList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedList = [...educationList, education]

        setEducationList(updatedList);
        addEducation(updatedList);

        setEducation({
            schoolName: "",
            major: "",
            dateOfCompletion: "",
            id: nanoid()
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEducation((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleEdit = (id) => {
        setEducation(educationList.find(education => education.id === id));
        handleDelete(id);
    }

    const handleDelete = (id) => {
        const updatedList = educationList.filter(education => education.id !== id);
        setEducationList(updatedList);
        addEducation(updatedList);
    }

    return (
        <div>
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
                    name="dateOfCompletion"
                    placeholder="Date"
                    value={education.dateOfCompletion}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add</button>
            </form>
            <div>{educationList.map((education)=> {
                return (
                    <div key={education.id}>
                        <h3>{education.major} - {education.schoolName}</h3>
                        <button onClick={()=>handleEdit(education.id)}>Edit</button> <button onClick={()=>handleDelete(education.id)}>Delete</button>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Education;