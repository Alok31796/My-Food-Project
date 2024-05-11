import { IMG_CDN_URL } from "../utils/config.js";

const RestaurantCart = ({
  name,
  cuisines,
  avgRatingString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
      <h2 className="textStyle">{name.substring(0, 25)}</h2>
      <h3 className="textStyle">{cuisines.join(", ").substring(0, 10)}</h3>
      <h4 className="textStyle">{avgRatingString} Start</h4>
    </div>
  );
};
export default RestaurantCart;
