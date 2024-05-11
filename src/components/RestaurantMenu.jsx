import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config.js";
import ShimmerCard from "./ShimmerCard";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurant, menuList } = useRestaurantMenu(id);

  if (restaurant === null) return <ShimmerCard />;
  const { name, city, avgRating, cloudinaryImageId } = restaurant;
  console.log(menuList);
  return (
    <div className="menuCard">
      <div>
        <h1>Restaurant id {id}</h1>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurantimg" />
        <h2>Restaurant Name {": " + name}</h2>
        <h2>Rating {": " + avgRating + " " + "star"}</h2>
        <h2>City{": " + city + " " + "city"}</h2>
      </div>
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {menuList?.map((item, index) => (
            <li key={index}>{item?.card?.card?.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
