import { useContext } from "react";
import { LikeContext } from "../../context/likeContext";
import CardLiked from "../CardLiked/CardLiked";
import { StyledLiked, StyledWrapper } from "./styles";

const LikedDogs = () => {
  const { likedItems } = useContext(LikeContext);

  return (
    <StyledWrapper>
      <h1>Liked Dogs</h1>
      <StyledLiked>
        {likedItems.map((item, index) => {
          return <CardLiked key={index} item={item} index={index} />;
        })}
      </StyledLiked>
    </StyledWrapper>
  );
};

export default LikedDogs;
