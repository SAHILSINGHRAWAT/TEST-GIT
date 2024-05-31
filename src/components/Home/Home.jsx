import React from "react";
import "./Home.scss";
// import BannerImg from "../Home/EampleCarouselImage/bg-3.jpg";
import Carousel from "react-bootstrap/Carousel";
import AppointmentForm from "./AppointmentForm";
import OurSevices from "./OurSevices";
import MedicalDepartment from "./MedicalDepartment/MedicalDepartment";

const Home = () => {
  return (
    <>
      {/* // ------------------------------section - 1-------------------------------- */}
      <div className="home1">
      <Carousel data-bs-theme="dark" className="home-sec-1">
        <Carousel.Item>
          <div className="hero-banner1">
            <div className="content1">
              <h1 style={{ fontWeight: "900" }}>
                Your health, our heartfelt{" "}
                <span style={{ color: "blue" }}> commitment </span>
              </h1>
              <p style={{ fontSize: "20px", color: "gray" }}>
                Denouncing pleasure and praising pain was born and we will give
                you a complete account of the system.
              </p>
              <div style={{ marginTop: "30px" }}>
                <button className="btn bg-primary rounded-5 px-4">
                  READ MORE
                </button>
                <button className="btn bg-primary mx-4 rounded-5 px-4">
                  DEPARTMENTS
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-banner2">
            <div className="content1">
              <h1 style={{ fontWeight: "900" }}>
                Hope and healing in every{" "}
                <span style={{ color: "blue" }}> heartbeat </span>
              </h1>
              <p style={{ fontSize: "20px", color: "gray" }}>
                In facing life's trials, we unveil its intricate depths,
                offering a comprehensive glimpse into our shared human story.
              </p>
              <div style={{ marginTop: "30px" }}>
                <button className="btn bg-primary rounded-5 px-4">
                  READ MORE
                </button>
                <button className="btn bg-primary mx-4 rounded-5 px-4">
                  DEPARTMENTS
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-banner3">
            <div className="content3 reveal">
              <h1 style={{ fontWeight: "900" }}>
              Every patient, every smile {" "}
                <span style={{ color: "blue" }}> matters </span>
              </h1>
              <p style={{ fontSize: "20px", color: "gray" }}>
              We make it easy for patients around the world to get care from Aditi Hospital.
              </p>
              <div style={{ marginTop: "30px" }}>
                <button className="btn bg-primary rounded-5 px-4">
                  READ MORE
                </button>
                <button className="btn bg-primary mx-4 rounded-5 px-4">
                  DEPARTMENTS
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <AppointmentForm className="appointmentForm"/>
      </div>
      {/* // ------------------------------section - 2-------------------------------- */}
      <MedicalDepartment/>
     <OurSevices/>
    </>
  );
};
export default Home;
