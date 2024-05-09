import { useState } from "react";
const UserFunction = (props) => {
  const [count] = useState(1);
  const [count2] = useState(2);
  return (
    <div className="user">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h3>Name: {props.name}</h3>
      <h3>Address: Aziz nagar Madiyion</h3>
      <h3>Email: Alok31796@gmail.com</h3>
    </div>
  );
};
export default UserFunction;
