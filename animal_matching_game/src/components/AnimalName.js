import { animals } from "../data/AnimalsDb";

const AnimalName = {
  getRandomName: () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex].name;
  }
};

export default AnimalName;


