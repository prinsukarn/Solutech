import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "@restart/ui/esm/Button";

function RequestServiceModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="container-fluid text-center">
        <Button
          class="btn bg-none btn-lg text-white p-2 mt-2"
          style={{
            borderRadius: "25px",
            fontSize: "12px",
            border: "0.03px solid ghostwhite",
          }}
          onClick={handleShow}
          target="_blank"
          role="button"
        >
          Request Service
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Service Request Form</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container" id="servicerequest">
            <div>
              <div id="servicerequest-col">
                <form>
                  <div className="form-group my-3">
                    <label for="name">
                      Full Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="name"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label for="phonenumber">
                      Phone Number<span>*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phonenumber"
                      aria-describedby="phone"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label for="exampleInputEmail1">
                      Email address<span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label for="exampleInputPassword1">
                      Service Category<span>*</span>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value="servicetype"
                    >
                      <option selected>Select Service</option>
                      <option value={1}>Accounting Services</option>
                      <option value={2}>IT Services</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group my-3">
                        <b>Accounting Services Type</b>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Audit & Assurance
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Accounting & Business Support
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Business Advisory
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Taxation Advisory
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Transaction Advisory
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            SOP Design & Implementation
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* /*******************************************IT SERVICES********************************* */}
                    <div className="col-md-8">
                      <div className="form-group my-3">
                        <b>IT Services Type</b>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Graphic Design
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Web Development
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Mobile App Development
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Digital Marketing
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Content Writing
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label" for="exampleCheck1">
                            Other Services
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group my-3">
                    <label for="Additional Information">
                      Additional Information<span>*</span>
                    </label>
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        defaultValue={""}
                      />
                      <label htmlFor="floatingTextarea"></label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-danger"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="btn btn-success"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default RequestServiceModal;
