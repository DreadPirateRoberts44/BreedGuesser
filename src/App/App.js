import React, { useState } from "react";
import "./App.css";
import Dog from "../Dog/Dog";

function App(props) {
  const [allDogs, setAllDogs] = useState([]);
  const getDogs = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/6");
    const data = await res.json();
    setAllDogs(allDogs.concat(data.message));
  };

  function getBreed(dog) {
    let start = dog.indexOf("breeds") + 7;
    return dog.substring(start, dog.indexOf("/", start));
  }

  function getAllBreeds() {
    let breeds = [];
    allDogs.forEach((dog) => breeds.push(getBreed(dog)));
    return breeds;
  }

  return (
    <div className="App">
      <button className="btn btn-outline-primary" onClick={() => getDogs()}>
        Fetch
      </button>
      <div className="dogBucket">
        {allDogs.map((dog, index) => (
          <>
            <Dog
              image={dog}
              breed={getBreed(dog)}
              allBreeds={getAllBreeds()}
            ></Dog>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
