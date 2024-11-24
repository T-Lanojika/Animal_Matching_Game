import AnimalName from "./AnimalName";
import AnimalGrid from "./AnimalGrid";
import { useState, useEffect } from "react";
import "../assets/css/styles.css";


export default function Result(){
    const [randomAnimal, setRandomAnimal] = useState(""); 
    const [selectedAnimal, setSelectedAnimal] = useState("");
    const[result,setResult]=useState("");

    const generateRandomAnimal = () => {
        const randomName = AnimalName.getRandomName();
        setRandomAnimal(randomName);
        setResult("");
        setSelectedAnimal("");
    };

    useEffect(() => {
        generateRandomAnimal(); // Generate an initial random animal
    }, []);

      const handleImageClick = (name) => {
        setSelectedAnimal(name); 

    if(name === randomAnimal){
        setResult("Win");
    }
    else{
        setResult("Lose");
    }
    setTimeout(() => {
        generateRandomAnimal();
    }, 3000);
}

    return(
        <div>
            <div className="resultSection">
                <div className="result">
                    <p>Result</p>
                    {result && <p className="resultText">{result}</p>} 
                </div>
                <div className="randomAnimal">
                    <p>Animal Name</p>
                    <p className="resultText">{randomAnimal}</p>
                </div>
                <div className="animalGrid">
                    <p>Select the Animal</p>
                    <AnimalGrid handleImageClick={handleImageClick} />
                </div>
            </div>
        </div>
    );
}