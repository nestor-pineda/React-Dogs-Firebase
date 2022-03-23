import { useContext } from "react";
import { LikeContext } from "../../context/likeContext";
import { StyledInfo } from "./styles";

const Info = ({ myAnimals }) => {
  // console.log(myAnimals.nombre);

  const { likedItems, setLikedItems } = useContext(LikeContext);

  return (
    <StyledInfo>
      <div className="info-dog__wrapper">
        <div className="info-dog__image" style={{ backgroundImage: `url(/images/${myAnimals.imagen}` }}></div>
        <div className="info-dog__text">
          <h2 className="info-dog__title">{myAnimals.nombre} </h2>
          <p className="info-dog__paragraph1">
            <b>Edad:</b> {myAnimals.edad}{" "}
          </p>
          <p className="info-dog__paragraph1">
            <b>Raza:</b> {myAnimals.raza}
          </p>
          <p className="info-dog__paragraph2">
            <b>Descripción:</b> {myAnimals.desc}
          </p>
          <button className="button" onClick={() => setLikedItems([...likedItems, myAnimals])}>
            Like ❤
          </button>
        </div>
      </div>
    </StyledInfo>
  );
};

export default Info;
