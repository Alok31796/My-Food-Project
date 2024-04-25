import { IMG_CDN_URL } from "../config.jsx";

const RestrauntCart = ({
  name,
  cuisines,
  avgRatingString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} Start</h4>
    </div>
  );
};
export default RestrauntCart;
