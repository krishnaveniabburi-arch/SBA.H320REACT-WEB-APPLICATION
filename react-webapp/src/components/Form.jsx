import React, { usestate } from "react";
export default function Form({ movieSearch }) {
    const [formData, setFormData] = useState({ searchterm: ""});
};

const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.searchterm.trim()) {
        moviesearch(formData.searchterm);
    }
};

return ( 
    <div className="search-form">
        <form onsubmot={handleSubmit}>
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
