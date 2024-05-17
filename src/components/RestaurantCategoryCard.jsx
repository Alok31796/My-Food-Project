import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategoryCard = ({ data }) => {
  const [showItem, setShowItem] = useState(false);
  const handleClicked = () => {
    setShowItem(!showItem);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-sm p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClicked}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategoryCard;
