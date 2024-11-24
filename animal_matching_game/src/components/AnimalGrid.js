import { animals } from "../data/AnimalsDb";
import "../assets/css/styles.css";


export default function AnimalGrid({ handleImageClick }){
    return(
        <div className="gridContainer">
        {animals.map((item, index) => (
        <img 
            key={index} 
            src={item.img} 
            alt={item.name} 
            className="gridImage"
            onClick={()=>handleImageClick(item.name)}/>
            ))}
        </div>
    )
}