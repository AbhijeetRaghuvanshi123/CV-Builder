import { useState } from "react"

const GeneralInfo = ({ addGeneralInfo }) => {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        number: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInfo((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addGeneralInfo(info);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={info.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                placeholder="Email"
                name="email"
                value={info.email}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                placeholder="Number"
                name="number"
                value={info.number}
                onChange={handleChange}
                required
            />

            <button type="submit">Add</button>
        </form>
    )
}

export default GeneralInfo;