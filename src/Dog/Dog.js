import React, { useState } from "react";
import "./Dog.css";

function Dog(props) {
  /*
  const [correct, setCorrect] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const handleChange = (event) => {
    setCorrect(event.target.value === props.breed);
    setShowCorrect(true);
  };
*/
  return (
    <div className={"dog"}>
      <img
        className="dog"
        src={props.image}
        alt={props.breed}
        data={props.allBreeds}
      ></img>
      <label for="guess">What breed am I?</label>
      <select /*onChange={handleChange}*/>
        {props.allBreeds.map((breed, index) => (
          <>
            <option value={breed}>{breed}</option>
          </>
        ))}
      </select>
    </div>
  );
}

export default Dog;
