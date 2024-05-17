const ShimmerCard = () => {
  return (
    <>
      <div className="flex justify-evenly flex-wrap mt-5">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="relative shadow-[0_6px_8px_rgba(0,0,0,0.1)] bg-gray-200 h-[500px] overflow-hidden w-[350px] mx-auto my-5 rounded-md"
            ></div>
          ))}
      </div>
    </>
  );
};

export default ShimmerCard;
