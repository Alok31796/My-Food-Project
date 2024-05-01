import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerCard from "./ShimmerCard";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuList, setMenuList] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=" +
        id +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER#"
    );
    const json = await data.json();
    // console.log(json.data.cards[2].card.card.info);
    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    setMenuList(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  }

  return !restaurant ? (
    <ShimmerCard />
  ) : (
    <div className="menuCard">
      <div>
        <h1>Restaurant id {id}</h1>
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt="restaurantimg"
        />
        <h2>Restaurant id {restaurant?.name}</h2>
        <h2>Rating {": " + restaurant?.avgRating + " " + "star"}</h2>
        <h2>City{": " + restaurant?.city + " " + "city"}</h2>
      </div>
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {menuList?.map((item) => (
            <li>{item?.card?.card?.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
