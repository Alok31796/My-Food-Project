import RestaurantCart, { WithPromotion } from "./RestaurantCart.jsx";
import { useState, useEffect, useContext } from "react";
import ShimmerCard from "./ShimmerCard.jsx";
import { Link } from "react-router-dom";
import { API_CDN } from "../utils/config.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const filterRestaurant = (changeText, allRestaurants) => {
  const searchData = allRestaurants.filter((restrons) =>
    restrons?.info?.name?.toLowerCase()?.includes(changeText?.toLowerCase())
  );
  return searchData;
};

const RestaurantCardPromotion = WithPromotion(RestaurantCart);

const Body = () => {
  const [changeText, setChangeText] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    console.log("API Call");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(API_CDN);
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log("Render");
  console.log(allRestaurants);

  if (!allRestaurants) return null; //Early Return

  // if (filteredRestaurants.length === 0) return <h1>No Restaurants Found</h1>;

  const isOnline = useOnlineStatus();

  if (isOnline === false) return <h1>Looks like you are 🔴off line</h1>;

  return allRestaurants?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          className="border-solid border-2 border-gray-400 mt-6 pl-2 pr-[10.5rem] py-2 rounded-md"
          placeholder="Search"
          value={changeText}
          onChange={(e) => {
            setChangeText(e.target.value);
          }}
        />
        <button
          className="border-solid border-2 bg-blue-600 hover:bg-blue-400 border-blue-600 mt-6 ml-2 px-5 py-2 rounded-md text-white"
          onClick={() => {
            // Need to filter Data
            const filterData = filterRestaurant(changeText, allRestaurants);
            // Update the State - Restraunt
            setFilteredRestaurants(filterData);
          }}
        >
          Search
        </button>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            className="border-solid border-2 border-gray-400 mt-6 pl-2 pr-[10.5rem] py-2 rounded-md"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap mt-5">
        {filteredRestaurants.map((restro) => {
          return (
            <Link key={restro?.info?.id} to={"/restaurant/" + restro?.info?.id}>
              {restro?.info?.isOpen ? (
                <RestaurantCardPromotion {...restro?.info} />
              ) : (
                <RestaurantCart {...restro?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
