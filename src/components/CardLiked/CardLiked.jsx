import { Link } from "react-router-dom";
import { StyledCard } from "../Card/styles";

const CardLiked = ({ item, index }) => {
  return (
    <StyledCard className="card-wrapper">
      <div className="image" style={{ backgroundImage: `url(/images/${item.imagen})` }}></div>
      <div className="info">
        <h3 className="info__name">{item.nombre}</h3>
        <p className="info__text">
          <b>Raza:</b> {item.raza}
        </p>
        <p className="info__text">
          <b>Edad:</b> {item.edad}
        </p>
      </div>
    </StyledCard>
  );
};

export default CardLiked;
