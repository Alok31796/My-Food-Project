import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import UserFunction from "./UserFunction";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <UserFunction name={"Alok Pandey (Function)"} />
      <UserClass name={"Alok pandey (class)"} location={"Laucknow"} />
      <UserContext.Consumer>
        {({ loggedInUser }) => console.log(loggedInUser)}
      </UserContext.Consumer>
    </div>
  );
};

export default About;
