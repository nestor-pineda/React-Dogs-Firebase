import { useContext } from "react";
import { LikeContext } from "../../context/likeContext";
import Card from "../Card/Card";
import { StyledLiked } from "./styles";

const LikedDogs = () => {
  const { likedItems } = useContext(LikeContext);

  return (
    <div>
      <h1>Liked Dogs...</h1>
      <StyledLiked>
        {likedItems.map((item, index) => {
          return <Card key={index} item={item} index={index} />;
        })}
      </StyledLiked>
    </div>
  );
};

export default LikedDogs;
