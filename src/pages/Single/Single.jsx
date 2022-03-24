import { useParams } from "react-router-dom";
import { useEffect, useState, useLayoutEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import Info from "../../components/Info/Info";
import db from "../../firebase/firebaseConfig";
import LikedDogs from "../../components/LikedDogs/LikedDogs";
import { gsap } from "gsap";

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

  // GSAP
  const card = document.querySelector(".dog-info");

  useLayoutEffect(() => {
    gsap.from(card, { duration: 1, y: 50, opacity: 0 });
  }, [myAnimals]);

  return (
    <div className="dog-info">
      {myAnimals && <Info myAnimals={myAnimals[slug]} />}
      <LikedDogs />
    </div>
  );
};

export default Single;
