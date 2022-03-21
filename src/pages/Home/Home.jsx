import Card from "../../components/Card/Card";
import { useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import db from "../../firebase/firebaseConfig";
import { StyledHome } from "./styles";

const Home = () => {
  useEffect(() => {
    const obtenrDatos = async () => {
      const myData = await getDocs(collection(db, "animales"));
      console.log(myData.docs[0].data());
    };

    obtenrDatos();
  }, []);

  return (
    <StyledHome>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledHome>
  );
};

export default Home;
