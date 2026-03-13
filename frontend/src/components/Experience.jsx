import { useState } from "react";

const Experience = ({ addExperience }) => {
    const [experience, setExperience] = useState({
        companyName: "",
        position: "",
        description: "",
        startDate: "",
        endDate: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setExperience((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addExperience(experience);
        setExperience({
            companyName: "",
            position: "",
            description: "",
            startDate: "",
            endDate: ""
        })
    }

    return (
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
    )
}

export default Experience;