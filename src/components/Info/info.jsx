import { useContext } from "react";
import { LikeContext } from "../../context/likeContext";

const Info = ({ myAnimals }) => {
  // console.log(myAnimals.nombre);

  const { likedItems, setLikedItems } = useContext(LikeContext);

  return (
    <div>
      <p>Nombre: {myAnimals.nombre} </p>
      <p>Nombre: {myAnimals.edad} </p>
      <p>Raza: {myAnimals.raza}</p>
      <p>Raza: {myAnimals.desc}</p>
      <img src={`/images/${myAnimals.imagen}`} alt="perros" />
      <button onClick={() => setLikedItems([...likedItems, myAnimals])}>Like</button>
    </div>
  );
};

export default Info;
