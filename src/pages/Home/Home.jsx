import Card from "../../components/Card/Card";
import { useEffect, useState, useLayoutEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import db from "../../firebase/firebaseConfig";
import { StyledHome } from "./styles";
import { gsap } from "gsap";

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

  // GSAP
  const card = document.querySelector(".card");

  useLayoutEffect(() => {
    gsap.from(card, { duration: 1, y: 50, opacity: 0 });
  }, [myAnimals]);

  return (
    <StyledHome className="card">
      {myAnimals.map((item, index) => {
        return <Card key={index} item={item} index={index} />;
      })}
    </StyledHome>
  );
};

export default Home;
