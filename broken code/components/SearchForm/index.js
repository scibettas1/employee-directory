import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="gender">Gender Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="gender"
          list="genders"
          type="text"
          className="form-control"
          placeholder="Type in a dog gender to begin"
          id="gender"
        />
        <datalist id="genders">
          {props.genders.map(gender => (
            <option value={gender} key={gender} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
