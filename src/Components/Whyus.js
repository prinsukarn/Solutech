import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";

function Whyus(props) {
  return (
    <>
      <div className="associationarc"></div>
      <h2
        className="text-center"
        style={{ backgroundColor: "#f5f5f5", margin: "0" }}
      >
        Why Choose Us
      </h2>
      <div className="container-fluid whyus p-md-5 p-3">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 col-12 video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/bw3lF9QgbW8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-6 whyusdesc px-md-5 p-3">
              <div className="container p-0">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="assets/images/Whyus/process-transparency.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <b>Process Transparency and Accuracy</b>
                    <p>
                      Users get access to knowledge about the process including
                      what it is, what to do, and where to go.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <img src="assets/images/Whyus/online-tracking.svg" alt="" />
                  </div>
                  <div className="col-10 ">
                    <b>Online Tracking and Dashboard Features</b>
                    <p>
                      View the progress of your services in real time. Keep
                      track of your documents and messages with experts.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <img
                      src="assets/images/Whyus/vetted-professional.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <b>Vetted professionals at your service</b>
                    <p>
                      Professionals vetted by us and chosen by you will work for
                      you on your behalf.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <img src="assets/images/Whyus/save-time.svg" alt="" />
                  </div>
                  <div className="col-10">
                    <b>Save Time and Reduce Stress</b>
                    <p>
                      No waiting in long queues. Hire a professional and have
                      the work done for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whyus;
