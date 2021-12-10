import React from "react";

function Appdownload(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row appdownload p-md-5">
          <div className="col-md-4 p-md-0 p-4 d-flex justify-content-center appcol1">
            <img
              className="img-fluid"
              src="assets/images/mobile-mockup.webp"
              alt="app Screenshot"
              width="200"
            />
          </div>
          <div className="col-md-8 p-md-4 p-4" style={{ color: "white" }}>
            <div className=" row align-items-center">
              <h2>One tap of a button for all your business needs</h2>
              <p>
                The Solutech Services and Solutech Professionals App are now
                available for download on Android and IOS devices.
              </p>
              <div class="row">
                <div class="col-md-4 col-6">
                  <p>For Solutech Clients:</p>
                  <img
                    src="assets/images/googleclients.webp"
                    alt=""
                    className="img-fluid mb-3"
                  />
                  <img
                    src="assets/images/playstore.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div class="col-md-4 col-6 mx-md-5">
                  <p>For Solutech Professionals:</p>
                  <img
                    src="assets/images/googleclients.webp"
                    alt=""
                    className="img-fluid mb-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appdownload;
