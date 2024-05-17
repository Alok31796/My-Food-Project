import { IMG_CDN_URL } from "../utils/config";
const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((resCards) => (
        <div
          key={resCards?.card?.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{resCards?.card?.info?.name}</span>
              <span>
                - ₹
                {resCards?.card?.info?.price
                  ? resCards?.card?.info?.price / 100
                  : resCards?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{resCards?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute pl-10">
              <button className="p-2 m-auto bg-black shadow-sm text-white rounded-md">
                Add Item
              </button>
            </div>
            <img
              src={IMG_CDN_URL + resCards?.card?.info?.imageId}
              alt="cardImg"
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
