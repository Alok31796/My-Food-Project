import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config.js";
import ShimmerCard from "./ShimmerCard";
import RestaurantCategoryCard from "./RestaurantCategoryCard.jsx";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { id } = useParams();
  const { restaurant, menuList } = useRestaurantMenu(id);

  if (restaurant === null) return <ShimmerCard />;
  const { name, city, avgRating, cloudinaryImageId } = restaurant;
  // console.log(menuList);

  const categories = menuList?.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return (
    <div className="menuCard">
      <div className="relative shadow-[0_6px_8px_rgba(0,0,0,0.1)] bg-gray-50 h-[500px] overflow-hidden w-full mx-auto my-5 rounded-md">
        <img
          className="w-full h-[400px] aspect-[3/2] object-cover"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurantimg"
        />
        <h1 className="pl-2 text-center">Restaurant id {id}</h1>
        <h2 className="pl-2 text-center">Restaurant Name {": " + name}</h2>
        <h2 className="pl-2 text-center">
          Rating {": " + avgRating + " " + "star"}
        </h2>
        <h2 className="pl-2 text-center">City{": " + city + " " + "city"}</h2>
      </div>
      <div className="text-center">
        <h1 className="pl-3 font-semibold">Menu</h1>
      </div>
      <div>
        {categories.map((cat, index) => (
          // controled Componend
          <RestaurantCategoryCard
            data={cat?.card?.card}
            key={cat?.card?.card?.title}
            showItem={index === showIndex && true} //also write {index==0 ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
