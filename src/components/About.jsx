import UserClass from "./UserClass";
import UserFunction from "./UserFunction";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <UserFunction name={"Alok Pandey (Function)"} />
      <UserClass name={"Alok pandey (class)"} location={"Laucknow"} />
    </div>
  );
};

export default About;
