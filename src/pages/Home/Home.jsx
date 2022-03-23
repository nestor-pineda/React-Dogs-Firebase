import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import db from "../../firebase/firebaseConfig";
import { StyledHome } from "./styles";

const Home = () => {
  const [myAnimals, setMyAnimals] = useState([]);
  const animalsCollectionRef = collection(db, "animales");

  useEffect(() => {
    const getAnimals = async () => {
      const data = await getDocs(animalsCollectionRef);
      setMyAnimals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAnimals();
  }, []);

  console.log(myAnimals[0]);

  return (
    <StyledHome>
      {myAnimals.map((item, index) => {
        return <Card key={index} item={item} index={index} />;
      })}
    </StyledHome>
  );
};

export default Home;

{
  /* <div key={item.id}>
            <h1>Name: {item.nombre} </h1>
            <p>Age: {item.edad} </p>
            <p>Raza: {item.raza} </p>
            <p>Age: {item.desc} </p>
            <img src={`/images/${item.imagen}`} alt="perros" />
          </div> */
}
