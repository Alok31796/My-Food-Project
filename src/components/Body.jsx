import RestrauntCart from "./RestrauntCart.jsx";
import { restrauntList } from "../config.jsx";
import { useState } from "react";

const filterRestraunt = (changeText, restraunt) => {
  const searchData = restrauntList.filter((restrons) =>
    restrons.info.name.includes(changeText)
  );
  return searchData;
};
const Body = () => {
  const [changeText, setChangeText] = useState();
  const [restraunt, setRestraunt] = useState(restrauntList);
  return (
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
            const filterData = filterRestraunt(changeText, restraunt);
            // Update the State - Restraunt
            setRestraunt(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {restraunt.map((restro) => {
          return <RestrauntCart {...restro.info} key={restro.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
