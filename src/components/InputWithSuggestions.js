import React, { useState } from "react";

const InputWithSuggestions = ({ options }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      {filteredOptions.length > 0 && (
        <ul>
          {filteredOptions.map((option) => (
            <li key={option} onClick={() => setValue(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputWithSuggestions;
