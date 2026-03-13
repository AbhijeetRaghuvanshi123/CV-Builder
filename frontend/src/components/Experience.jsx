import { useState } from "react";
import { nanoid } from "nanoid";

const Experience = ({ addExperience }) => {
    const [experience, setExperience] = useState({
        companyName: "",
        position: "",
        description: "",
        startDate: "",
        endDate: "",
        id: nanoid()
    })

    const [experienceList, setExperienceList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setExperience((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedList = [...experienceList, experience];

        setExperienceList(updatedList);
        addExperience(updatedList);
        setExperience({
            companyName: "",
            position: "",
            description: "",
            startDate: "",
            endDate: "",
            id: nanoid()
        })
    }

    const handleEdit = (id) => {
        setExperience(experienceList.find(experience => experience.id === id));
        handleDelete(id);
    }

    const handleDelete = (id) => {
        const updatedList = experienceList.filter(experience => experience.id !== id);
        setExperienceList(updatedList);
        addExperience(updatedList);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="exp-form">
                <input
                    type="text"
                    placeholder="Company Name"
                    name="companyName"
                    value={experience.companyName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Position"
                    name="position"
                    value={experience.position}
                    onChange={handleChange}
                    required
                />
                <h4>Give Detailed overview of your Role.</h4>
                <input
                    type="text"
                    placeholder="Role Description"
                    name="description"
                    value={experience.description}
                    onChange={handleChange}
                    required
                />
                <h3>Start Date:</h3>
                <input
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    value={experience.startDate}
                    onChange={handleChange}
                    required
                />
                <h3>End Date:</h3>
                <input
                    type="date"
                    placeholder="End Date"
                    name="endDate"
                    value={experience.endDate}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add</button>
            </form>
            <div>{experienceList.map((experience) => {
                return (
                    <div key={experience.id}>
                        <h3>{experience.position} {experience.companyName}</h3>
                        <button onClick={() => handleEdit(experience.id)}>Edit</button> <button onClick={() => handleDelete(experience.id)}>Delete</button>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Experience;