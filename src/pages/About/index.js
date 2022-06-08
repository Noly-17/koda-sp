import React from "react";
import "./aboutStyle.scss";
import Navbar from "../../components/Navbar";
import Recs from "../../components/Recs";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-wrapper">
        <div className="about">
          <div className="f-continer">
            <div className="left">
              dolor sit amet consectetur adipisicing elit. Temporibus voluptatem
              sunt, repellat nihil eius illum at est quasi repudiandae,
              doloremque culpa quidem similique eum? Quia commodi reprehenderit
              veniam quidem pariatur tempora illo quos, numquam cum doloribus
              tenetur repellendus omnis doloremque hic dolore? Reprehenderit et{" "}
              <br />
              <br />
              nobis architecto esse deserunt dolorem laborum. Animi reiciendis
              explicabo eligendi quas fugiat? Quisquam illum fugiat, consectetur
              modi dignissimos maiores suscipit possimus consequatur alias
              similique. Dolor officiis modi eius esse quo sunt unde quis
              distinctio voluptate cupiditate. Maxime autem accusamus
              perspiciatis
              <br />
              <br />
              voluptatum! Similique veritatis ab eos, facere consequuntur ullam
              aperiam libero quas officia iusto, quibusdam repellat sit!
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptatem sunt, repellat nihil eius illum at est quasi
              repudiandae, doloremque culpa quidem similique eum? Quia commodi
              reprehenderit
            </div>
          </div>
        </div>
        <Recs />
      </div>
    </>
  );
};

export default About;
