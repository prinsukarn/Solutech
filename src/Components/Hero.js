import React from "react";
import Modalp from "./Professionalmodal";
import Button from "@restart/ui/esm/Button";

function Hero(props) {
  return (
    <div className="container-fluid">
      <div class="row p-md-3" id="hero">
        <div class="col-md-5 hero-1 p-md-5">
          <div class="container d-flex align-items-center justify-content-center text-center h-100">
            <div class="text-white p-md-0 p-4">
              <h2 class="mb-3">One stop platform for business needs</h2>
              <div class="container-fluid">
                <Button
                  class="btn btn-outline-primary btn-lg m-2 btnseek"
                  target="_blank"
                  role="button"
                >
                  Seek a Service
                </Button>
              </div>
              <Modalp />
              <div className="container-fluid">
                <a href="#">Meet our Solutech professionals.</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <img src="./assets/images/9.png" class="img-fluid" alt="..." />
        </div>
      </div>
      <div className="heroarc"></div>
    </div>
  );
}

export default Hero;
