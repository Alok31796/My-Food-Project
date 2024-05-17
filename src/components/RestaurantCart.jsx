import { IMG_CDN_URL } from "../utils/config.js";

const RestaurantCart = ({
  name,
  cuisines,
  avgRatingString,
  cloudinaryImageId,
}) => {
  return (
    <div className="relative shadow-[0_6px_8px_rgba(0,0,0,0.1)] bg-gray-50 h-[500px] overflow-hidden w-[350px] mx-auto my-5 rounded-md hover:bg-gray-200">
      <img
        className="w-full h-[400px] aspect-[2/2] object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="image"
      />
      <h2 className="pl-3 pt-2 font-bold">{name.substring(0, 25)}</h2>
      <h3 className="pl-3">{cuisines.join(", ").substring(0, 10)}</h3>
      <h4 className="pl-3">{avgRatingString} Start</h4>
    </div>
  );
};

export const WithPromotion = (RestaurantCart) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-600 m-2 p-2 rounded-lg text-white z-10">
          Open
        </label>
        <RestaurantCart {...props} />
      </div>
    );
  };
};

export default RestaurantCart;
