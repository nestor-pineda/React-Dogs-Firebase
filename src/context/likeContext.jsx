import { createContext, useState } from "react";

export const LikeContext = createContext(null);

export const LikeProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  const store = {
    likedItems,
    setLikedItems,
  };

  return <LikeContext.Provider value={store}>{children}</LikeContext.Provider>;
};
