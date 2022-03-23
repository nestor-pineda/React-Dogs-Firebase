import { useContext } from "react";
import { LikeContext } from "../../context/likeContext";

const LikedDogs = () => {
  const { likedItems } = useContext(LikeContext);

  return (
    <div>
      <h1>This is the add Cart page</h1>

      {likedItems.map((item, index) => (
        <div key={index}>{item.nombre}</div>
      ))}
    </div>
  );
};

export default LikedDogs;
