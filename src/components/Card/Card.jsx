import { Link } from "react-router-dom";
import { StyledCard } from "./styles";

const Card = ({ item }) => {
  return (
    <StyledCard className="card-wrapper">
      <div className="image" style={{ backgroundImage: `url(/images/${item.imagen})` }}></div>
      <div className="info">
        <h3 className="info__name">{item.nombre}</h3>
        <p className="info__text">{item.raza}</p>
        <Link className="info__text info__text--link" to="">
          Read more
        </Link>
      </div>
    </StyledCard>
  );
};

export default Card;
