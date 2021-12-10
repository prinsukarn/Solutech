import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "@restart/ui/esm/Button";
function ApplyJobmodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="container-fluid">
        <Button
          class="btn btn-success btn-lg m-2"
          onClick={handleShow}
          target="_blank"
          role="button"
        >
          Apply Now
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Become a Solutech Professional</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container ">
            <div>
              <div id="contact-col">
                <form>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-4">
                    <div className="col">
                      <div className="">
                        <label className="form-label" htmlFor="form6Example1">
                          First name<span>*</span>
                        </label>
                        <input
                          type="text"
                          id="form6Example1"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="">
                        <label className="form-label" htmlFor="form6Example2">
                          Last name<span>*</span>
                        </label>
                        <input
                          type="text"
                          id="form6Example2"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Text input */}
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form6Example3">
                      Company name<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="form6Example3"
                      className="form-control"
                    />
                  </div>
                  {/* Text input */}
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form6Example4">
                      Address<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="form6Example4"
                      className="form-control"
                    />
                  </div>
                  {/* Email input */}
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form6Example5">
                      Email<span>*</span>
                    </label>
                    <input
                      type="email"
                      id="form6Example5"
                      className="form-control"
                    />
                  </div>
                  {/* Number input */}
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form6Example6">
                      Phone<span>*</span>
                    </label>
                    <input
                      type="number"
                      id="form6Example6"
                      className="form-control"
                    />
                  </div>
                  {/* Message input */}
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form6Example7">
                      Additional information<span>*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="form6Example7"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Submit Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default ApplyJobmodal;
