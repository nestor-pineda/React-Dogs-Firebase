import { useContext } from "react";
import { LikeContext } from "../../context/likeContext";
import Card from "../Card/Card";

const LikedDogs = () => {
  const { likedItems } = useContext(LikeContext);

  return (
    <div>
      <h1>This is the add Cart page</h1>

      {likedItems.map((item, index) => {
        return <Card key={index} item={item} index={index} />;
      })}
    </div>
  );
};

export default LikedDogs;
