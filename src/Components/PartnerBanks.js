import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PartnerBanks(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="partnerarc"></div>
      <h2
        className="text-center"
        style={{ backgroundColor: "#fdfdfd", margin: "0px" }}
      >
        Our Partner Banks
      </h2>
      <div
        className="container-fluid p-md-5 p-4"
        style={{ backgroundColor: "#fdfdfd" }}
      >
        <div className="container">
          <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            arrows={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={500}
            keyBoardControl={true}
            customTransition="all .2"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid silver",
                height: "200px",
              }}
              className="m-md-2 d-flex justify-content-center"
            >
              <img
                alt=""
                className="p-md-5"
                width="100%"
                src="assets/images/Banks/kamana.png"
              />
            </div>
            <div
              style={{
                backgroundColor: "#008db8",
                border: "1px solid silver",
                height: "200px",
              }}
              className="m-md-2 -flex align-items-middle justify-content-center"
            >
              <img
                alt=""
                className="p-md-5"
                width="100%"
                src="assets/images/Banks/kumari.png"
              />
            </div>
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid silver",
                height: "200px",
              }}
              className="m-md-2 -flex align-items-middle justify-content-center"
            >
              <img
                alt=""
                className="p-md-5"
                width="100%"
                src="assets/images/Banks/laxmi.png"
              />
            </div>
            <div
              style={{
                backgroundColor: "#22b25a",
                border: "1px solid silver",
                height: "200px",
              }}
              className="m-md-2 -flex align-items-middle justify-content-center"
            >
              <img
                alt=""
                className="p-md-5"
                width="100%"
                src="assets/images/Banks/nabil.png"
              />
            </div>
            <div
              style={{
                backgroundColor: "red",
                border: "1px solid silver",
                height: "200px",
              }}
              className="m-md-2 -flex align-items-middle justify-content-center"
            >
              <img
                alt=""
                className="p-md-5"
                width="100%"
                src="assets/images/Banks/nic.png"
              />
            </div>
            <div
              style={{
                backgroundColor: "#e672b3",
                border: "1px solid silver",
                height: "200px",
              }}
              className="m-md-2 -flex align-items-middle justify-content-center"
            >
              <img
                alt=""
                className="p-md-5"
                width="100%"
                src="assets/images/Banks/prime.png"
              />
            </div>
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid silver",
                height: "200px",
              }}
              className="m-md-2 -flex align-items-middle justify-content-center"
            >
              <img
                alt=""
                className="p-md-5"
                width="100%"
                src="assets/images/Banks/shangri.png"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default PartnerBanks;
