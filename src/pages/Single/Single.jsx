import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import Info from "../Info/info";
import db from "../../firebase/firebaseConfig";

const Single = () => {
  const { slug } = useParams();

  const [myAnimals, setMyAnimals] = useState(null);
  const animalsCollectionRef = collection(db, "animales");

  useEffect(() => {
    const getAnimals = async () => {
      const data = await getDocs(animalsCollectionRef);
      setMyAnimals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAnimals();
  }, []);

  // console.log(myAnimals[slug].nombre);

  // const animal = myAnimals[slug];
  // console.log(animal.nombre);

  return (
    <div>
      <p>his is the single page {slug}</p>
      {myAnimals && <Info myAnimals={myAnimals[slug]} />}

      {/* 
      <p>Nombre: {myAnimals[slug].nombre} </p>
      <p>Nombre: {myAnimals[slug].edad} </p>
      <p>Raza: {myAnimals[slug].raza}</p>
      <p>Raza: {myAnimals[slug].desc}</p>
      <img src={`/images/${myAnimals[slug].imagen}`} alt="perros" /> */}
    </div>
  );
};

export default Single;
