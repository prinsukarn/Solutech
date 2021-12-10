import React from "react";
import ApplyJobmodal from "./ApplyJobmodal";
import RequestServiceModal from "./RequestaServicemodal";

function ITServices(props) {
  return (
    <div
      className="p-md-5 p-2"
      style={{ backgroundColor: "ghostwhite" }}
      id="Itservices"
    >
      <div className="container">
        <h2 className="text-center m-3 mb-md-4">IT Services</h2>
        <div className="row  p-md-2">
          <div className="col-md-4">
            <div className="card bg-danger text-white mb-md-4 mb-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">Graphic Design</h5>
                <ul>
                  <li>Logo Design</li>
                  <li>Ad Design</li>
                  <li>Brochure Design</li>
                  <li>Flex Design</li>
                  <li>Menu Design</li>
                  <li>Business Card Design</li>
                  <li>Print Materials Design</li>
                  <li>Branding</li>& Other Services
                </ul>
                <RequestServiceModal />
              </div>
            </div>
            <div className="card bg-warning text-white mb-md-4 mb-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">
                  Digital Marketing
                </h5>
                <ul>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Search Engine Marketing (SEM)</li>
                  <li>Website Strategy</li>
                  <li>Social Media Marketing</li>
                  <li>Email Outreach</li>
                  <li>Re-targeting</li>
                  <li>Content Generation and Optimization</li>
                  <li>Quality Link Building</li>& Other Services
                </ul>
                <RequestServiceModal />
              </div>
            </div>
          </div>
          {/* ********************************CARD 2************************************/}
          <div className="col-md-4">
            <div className="card bg-primary text-white mb-md-4 mb-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">Web Development</h5>
                <ul>
                  <li>Content Management System</li>
                  <li>
                    Shopping Cart / Online Ordering System / Online Payments
                  </li>
                  <li>Event Booking System</li>
                  <li>Document Management System</li>
                  <li>Membership System</li>
                  <li>Business Card Design</li>
                  <li>Blog / News Management</li>
                  <li>Business Directory / Listings</li>& Many More
                </ul>
                <RequestServiceModal />
              </div>
            </div>
            <div className="card bg-info text-white mb-md-4 mb-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">Other Services</h5>
                <ul>
                  <li>Networking</li>
                  <li>IT Consultation</li>
                  <li>Email Marketing</li>
                  <li>Electronics Store</li>
                  <li>Video Editing</li>
                  <li>Domain Registration</li>
                  <li>Hosting Services</li>& Many More
                </ul>
                <RequestServiceModal />
              </div>
            </div>
          </div>
          {/* /*************************************Card3 ****************************** */}
          <div className="col-md-4">
            <div className="card bg-warning text-white mb-md-4 mb-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">
                  Mobile App Development
                </h5>
                <ul>
                  <li>Mobile Consulting</li>
                  <li>Mobile App Design</li>
                  <li>Mobile App Development</li>
                  <li>Backend Development</li>
                  <li>Mobile App QA and Support</li>
                  <li>Mobile App Evolution</li>
                </ul>
                <RequestServiceModal />
              </div>
            </div>
            <div className="card bg-success text-white mb-md-4 mb-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">Content Writing</h5>
                <ul>
                  <li>Blog Posts</li>
                  <li>White Papers</li>
                  <li>eBooks</li>
                  <li>Infographics</li>
                  <li>Case Studies</li>
                  <li>Website Copy</li>
                  <li>Email Copy & Newsletters</li>
                  <li>Copywriting</li>
                  <li>Video & Animation Scripts</li>
                  <li>Custom Content</li>
                </ul>
                <RequestServiceModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITServices;
