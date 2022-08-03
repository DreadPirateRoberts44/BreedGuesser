import React, { useEffect, useState } from "react";
import "./App.css";
import Dog from "../Dog/Dog";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [dogsTrue, setDogsTrue] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const getDogs = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/6");
    const data = await res.json();
    setAllDogs(data.message);
  };

  const clearDogs = () => {
    setAllDogs([]);
  };

  function getBreed(dog) {
    let start = dog.indexOf("breeds") + 7;
    return dog.substring(start, dog.indexOf("/", start));
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  function getAllBreeds() {
    let breeds = [];
    allDogs.forEach((dog) => breeds.push(getBreed(dog)));
    shuffleArray(breeds);
    return breeds;
  }

  function updateTruth(pos, dogCorrect) {
    let truth = dogsTrue;
    truth[pos] = dogCorrect;
    setDogsTrue(truth);
    let anyFalse = false;
    for (let i = 0; i < truth.length; i++) {
      if (truth[i] === false) {
        anyFalse = true;
        break;
      }
    }
    if (!anyFalse) {
      clearDogs();
      getDogs();
      setDogsTrue([false, false, false, false, false, false]);
    }
  }

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div className="App">
      <div className="dogBucket">
        {allDogs.map((dog, index) => (
          <Dog
            update={updateTruth}
            index={index}
            image={dog}
            breed={getBreed(dog)}
            allBreeds={getAllBreeds()}
          ></Dog>
        ))}
      </div>
    </div>
  );
}

export default App;
