import React from "react";
import SideArrow from "../../components/SideArrow";
import "./homeStyle.scss";
const Home = () => {
  return (
    <>
      <div className="home">
        <div>
          <h1>
            Lorem ipsum dolor, sit amet
            <br />
            consectetur sadipisicing elitr
            <br />
          </h1>

          <button class="button-find">Find Out More</button>
        </div>
      </div>
      <SideArrow path={"/about"} />
    </>
  );
};

export default Home;
