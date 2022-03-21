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
      // console.log(myData.docs[1].data());
    };

    getAnimals();
  }, []);

  return (
    <StyledHome>
      {myAnimals.map((item) => {
        return <Card key={item.id} item={item} />;
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
