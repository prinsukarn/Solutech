import React from "react";

function Services(props) {
  return (
    <>
      <div className="servicesarc"></div>
      <div
        className="container-fluid p-0 p-md-2"
        style={{ backgroundColor: "#fdfdfd" }}
      >
        <div className="container">
          <h2 className=" text-center mb-4 mb-md-0"> How it Works?</h2>
          <div className="row p-md-5 mb-md-2">
            <div class="row m-0">
              <div class="col-md-6 col-12 ">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row p-md-4 p-2 g-0">
                    <div className="col-md-5 ">
                      <img
                        src="assets/images/artwork-1.svg"
                        alt="..."
                        className="img-fluid rounded-start "
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-md-4">
                        <h6 className="card-title">
                          Do you have business services you need help with?
                        </h6>
                        <p className="card-text">
                          We understand that the process is often confusing.
                          Also, taking time out of your busy schedule can be
                          very difficult.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 ">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row p-md-4 p-2 g-0">
                    <div className="col-md-5">
                      <img
                        src="assets/images/artwork-2.svg"
                        alt="..."
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-md-4">
                        <h6 className="card-title">
                          Log on to Upaya from any device or platform
                        </h6>
                        <p className="card-text">
                          Upaya has interactive videos that help you better
                          understand the process and documentation related to
                          various business services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row m-0">
              <div class="col-md-6 col-12 ">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row p-md-4 p-2 g-0">
                    <div className="col-md-5 ">
                      <img
                        src="assets/images/artwork-3.svg"
                        alt="..."
                        className="img-fluid rounded-start "
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-md-4">
                        <h6 className="card-title">
                          Hire an Upaya professional to get your work done
                        </h6>
                        <p className="card-text">
                          We have trained and vetted professionals on-hire who
                          can assist you with the process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 ">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row p-md-4 p-2 g-0">
                    <div className="col-md-5">
                      <img
                        src="assets/images/artwork-4.svg"
                        alt="..."
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-md-4">
                        <h6 className="card-title">
                          Relax and unwind as Upaya takes care of your tasks
                        </h6>
                        <p className="card-text">
                          Track your work progress through an interactive
                          dashboard and get notified when the work is complete.
                          Save time, reduce stress!
                        </p>
                      </div>
                    </div>
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

export default Services;
