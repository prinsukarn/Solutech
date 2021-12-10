import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "@restart/ui/esm/Button";
function Modalp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="container-fluid">
        <Button
          class="btn btn-outline-primary btn-lg m-2"
          id="basp"
          onClick={handleShow}
          target="_blank"
          role="button"
        >
          Become A Solutech Professional
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
                      Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label for="exampleInputPassword1">
                      Confirm Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <label for="exampleInputPassword1">
                    What is your area of expertise?<span>*</span>
                  </label>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Legal
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Technical
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Accounting
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Marketing
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modalp;
