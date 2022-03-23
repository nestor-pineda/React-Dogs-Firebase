import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import Info from "../../components/Info/info";
import db from "../../firebase/firebaseConfig";
import LikedDogs from "../../components/LikedDogs/LikedDogs";

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

  return (
    <div>
      {myAnimals && <Info myAnimals={myAnimals[slug]} />}
      <p>Liked dogs</p>
      <LikedDogs />
    </div>
  );
};

export default Single;
