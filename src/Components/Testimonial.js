import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimonial(props) {
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
        className="text-center py-4"
        style={{ backgroundColor: "#f5f5f5", margin: "0px" }}
      >
        Testimonials
      </h2>
      <div
        className="container-fluid p-md-5 p-0"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container p-3 p-md-0">
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
              {/*Card*/}
              <div className="card testimonial-card m-md-3  bg-warning text-white">
                {/*Background color*/}
                <div className="card-up info-color" />
                {/*Avatar*/}
                <div className="avatar mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                    className="rounded-circle img-fluid"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  {/*Name*/}
                  <h4 className="font-weight-bold mb-4">John Doe</h4>
                  <hr />
                  {/*Quotation*/}
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pr-2" />
                    "I am a student of BCT. I think Solutech is a great platform
                    for every citizen and us, service providers. Solutech has
                    provided me an opportunity of learning IT work with regular
                    practice. It is also helping me generate extra income so I
                    am independent."
                  </p>
                </div>
              </div>
              {/*Card*/}
            </div>
            <div>
              {/*Card*/}
              <div className="card testimonial-card m-md-3 ">
                {/*Background color*/}
                <div className="card-up info-color" />
                {/*Avatar*/}
                <div className="avatar mx-auto white">
                  <img
                    src="assets/images/Sundar_pichai.png"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                </div>
                <div className="card-body">
                  {/*Name*/}
                  <h4 className="font-weight-bold mb-4">Sundar Pichai</h4>
                  <hr />
                  {/*Quotation*/}
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pr-2" />
                    "I am a student of BCT. I think Solutech is a great platform
                    for every citizen and us, service providers. Solutech has
                    provided me an opportunity of learning IT work with regular
                    practice. It is also helping me generate extra income so I
                    am independent."
                  </p>
                </div>
              </div>
              {/*Card*/}
            </div>
            <div>
              {/*Card*/}
              <div className="card testimonial-card m-md-3  bg-info text-white">
                {/*Background color*/}
                <div className="card-up info-color" />
                {/*Avatar*/}
                <div className="avatar mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                </div>
                <div className="card-body">
                  {/*Name*/}
                  <h4 className="font-weight-bold mb-4">Nitesh Kr Karn</h4>
                  <hr />
                  {/*Quotation*/}
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pr-2" />
                    "I am a student of BCT. I think Solutech is a great platform
                    for every citizen and us, service providers. Solutech has
                    provided me an opportunity of learning IT work with regular
                    practice. It is also helping me generate extra income so I
                    am independent."
                  </p>
                </div>
              </div>
              {/*Card*/}
            </div>
            <div>
              {/*Card*/}
              <div className="card testimonial-card m-md-3 ">
                {/*Background color*/}
                <div className="card-up info-color" />
                {/*Avatar*/}
                <div className="avatar mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                </div>
                <div className="card-body">
                  {/*Name*/}
                  <h4 className="font-weight-bold mb-4">Suhana Karn</h4>
                  <hr />
                  {/*Quotation*/}
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pr-2" />
                    "I am a student of BCT. I think Solutech is a great platform
                    for every citizen and us, service providers. Solutech has
                    provided me an opportunity of learning IT work with regular
                    practice. It is also helping me generate extra income so I
                    am independent."
                  </p>
                </div>
              </div>
              {/*Card*/}
            </div>
            <div>
              {/*Card*/}
              <div className="card testimonial-card m-md-3  bg-primary text-white">
                {/*Background color*/}
                <div className="card-up info-color" />
                {/*Avatar*/}
                <div className="avatar mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                </div>
                <div className="card-body">
                  {/*Name*/}
                  <h4 className="font-weight-bold mb-4">John Doe</h4>
                  <hr />
                  {/*Quotation*/}
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pr-2" />
                    "I am a student of BCT. I think Solutech is a great platform
                    for every citizen and us, service providers. Solutech has
                    provided me an opportunity of learning IT work with regular
                    practice. It is also helping me generate extra income so I
                    am independent."
                  </p>
                </div>
              </div>
              {/*Card*/}
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
