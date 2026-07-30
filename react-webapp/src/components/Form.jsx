import React, { useState } from "react";
export default function Form({ movieSearch }) {
    const [formData, setFormData] = useState({ searchterm: ""});
const handleChange = (event) => {
    setFormData( {
        ...formData,[event.target.name]: event.target.value
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.searchterm.trim()) {
        movieSearch(formData.searchterm);
    }
};

return ( 
    <div className="search-form">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
            placeholder="Search for a movie"
            />
        </form>
    </div>
);
}
