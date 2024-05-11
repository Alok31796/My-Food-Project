import { useState, useEffect } from "react";
import { MENU_CDN } from "../utils/config.js";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuList, setMenuList] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MENU_CDN + id);
    const json = await data.json();
    // console.log(json.data.cards[2].card.card.info);
    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    setMenuList(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  }

  return { menuList, restaurant };
};

export default useRestaurantMenu;
