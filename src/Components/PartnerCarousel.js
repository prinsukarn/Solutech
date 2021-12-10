import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PartnerCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="associationarc"></div>
      <h2
        className="text-center"
        style={{ backgroundColor: "#f5f5f5", margin: "0px" }}
      >
        Our Associations
      </h2>
      <div
        className="container-fluid p-md-5 p-4"
        style={{ backgroundColor: "#f5f5f5" }}
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
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <img
                className="px-md-5"
                width="100%"
                src="assets/images/imepay.png"
              />
            </div>
            <div>
              <img
                className="px-md-5"
                width="100%"
                src="assets/images/Khalti.jpg"
              />
            </div>
            <div>
              <img
                className="px-md-5"
                width="100%"
                src="assets/images/esewa.jpg"
              />
            </div>
            <div>
              <img
                className="px-md-5"
                width="100%"
                src="assets/images/estore.png"
              />
            </div>
            <div>
              <img
                className="px-md-5"
                width="100%"
                src="assets/images/imepay.png"
              />
            </div>
            <div>
              <img
                className="px-md-5"
                width="100%"
                src="assets/images/Khalti.jpg"
              />
            </div>
            <div>
              <img
                className="px-md-5"
                width="100%"
                src="assets/images/esewa.jpg"
              />
            </div>
            <div>
              <img
                className="px-md-5"
                width="100%"
                src="assets/images/estore.png"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default PartnerCarousel;
