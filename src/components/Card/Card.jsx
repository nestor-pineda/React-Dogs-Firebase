import { Link } from "react-router-dom";
import { StyledCard } from "./styles";

const Card = () => {
  return (
    <StyledCard className="card-wrapper">
      <div className="image"></div>
      <div className="info">
        <h3 className="info__name">Name</h3>
        <p className="info__text">Class</p>
        <Link className="info__text info__text--link" to="">
          Read more
        </Link>
      </div>
    </StyledCard>
  );
};

export default Card;
