import React, { useState } from "react";
import "./Dog.css";

function Dog(props) {
  const [correct, setCorrect] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const handleChange = (event) => {
    setCorrect(event.target.value === props.breed);
    setShowCorrect(true);
    props.update(props.index, event.target.value === props.breed);
  };
  return (
    <div className="dog" data={props.index}>
      <img className="dog" src={props.image} alt={props.breed}></img>
      <div>
        <label for="guess">What breed am I?</label>
        <select
          className={
            correct && showCorrect ? "correct" : !showCorrect ? "" : "incorrect"
          }
          onChange={handleChange}
        >
          <option>Select a breed</option>
          {props.allBreeds.map((breed, index) => (
            <option value={breed}>{breed}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dog;
