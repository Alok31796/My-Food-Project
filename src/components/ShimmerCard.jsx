const ShimmerCard = () => {
  return (
    <>
      <div className="restaurant-shimmer">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};

export default ShimmerCard;
