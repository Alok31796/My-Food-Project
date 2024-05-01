import RestaurantCart from "./RestaurantCart.jsx";
// import { restaurantsList } from "../config.jsx";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard.jsx";
import { Link } from "react-router-dom";

const filterRestaurant = (changeText, allRestaurants) => {
  const searchData = allRestaurants.filter((restrons) =>
    restrons?.info?.name?.toLowerCase()?.includes(changeText?.toLowerCase())
  );
  return searchData;
};

const Body = () => {
  const [changeText, setChangeText] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    console.log("API Call");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log("Render");

  if (!allRestaurants) return null; //Early Return

  // if (filteredRestaurants.length === 0) return <h1>No Restaurants Found</h1>;

  return allRestaurants?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={changeText}
          onChange={(e) => {
            setChangeText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Need to filter Data
            const filterData = filterRestaurant(changeText, allRestaurants);
            // Update the State - Restraunt
            setFilteredRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurants-list">
        {filteredRestaurants.map((restro) => {
          return (
            <Link key={restro?.info?.id} to={"/restaurant/" + restro?.info?.id}>
              <RestaurantCart {...restro?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
