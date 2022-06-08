import React from "react";
import SideArrow from "../../components/SideArrow";
import Navbar from "../../components/Navbar";
import "./homeStyle.scss";
const Home = () => {
  return (
    <>
      <Navbar />
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
