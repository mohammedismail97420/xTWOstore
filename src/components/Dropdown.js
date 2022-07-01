import { useState } from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className="customDropdown">
      <div
        onClick={toggleDropdown}
        className={`dropdownLabel ${dropdownActive ? "active" : ""}`}
      >
        {props.label}
      </div>
      {dropdownActive && props.options !== "" && (
        <ul className="dropdownItem">
          {props.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
