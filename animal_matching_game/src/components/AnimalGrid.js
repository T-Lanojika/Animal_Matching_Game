import React from "react";

const AnimalGrid = ({ animals, onAnimalClick }) => {
  return (
    <div className="grid">
      {animals.map((animal, index) => (
        <div key={index} onClick={() => onAnimalClick(animal.name)}>
          <img src={animal.img} alt={animal.name} />
        </div>
      ))}
    </div>
  );
};

export default AnimalGrid;
