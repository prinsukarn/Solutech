import React from "react";
import ApplyJobmodal from "../Components/ApplyJobmodal";

function Career(props) {
  return (
    <div id="page">
      <div className="row d-flex justify-content-center m-md-5 m-2">
        <h2 className="text-center">JOIN OUR TEAM</h2>
        <p className="text-justify p-md-3" style={{ color: "#00" }}>
          We are always looking for good people to come work with us. We care
          less about your past experience, and more about your ability to learn
          as well as your grasp of fundamental concepts. We are an innovative
          team, and help each other grow in a collaborative atmosphere. Here at
          Upaya we value having a friendly and collaborative working
          environment, while taking our work very seriously. Everyone's work and
          input are judged solely on merit, with seniority carrying little
          weight. We encourage you to innovate and take risks. Everyone is
          accessible, so go ahead and ask for help when you are stuck, and
          reciprocate when needed. At Upaya, we are one team.
        </p>
        <div className="col-md-12">
          <h2>Vacancies</h2>
          <div className="row">
            <div className="col-sm-6 mb-md-3 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Finance Officer</h5>
                  <p className="card-text">
                    Reporting to a manager and supporting the finance and
                    accounting teams, a Finance Officer job description should
                    include some of the below key duties and responsibilities.
                  </p>
                  <b>Roles & Responsibilities</b>
                  <ul>
                    <li>
                      Resolve financial disputes raised by the customer service
                      and sales teams
                    </li>
                    <li>
                      Being a key point of contact for other departments on
                      financial and accounting matters
                    </li>
                  </ul>
                  <a href="#">
                    <ApplyJobmodal />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-md-3 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Chief Technical Officer</h5>
                  <p className="card-text">
                    The CTO position and responsibilities is considered to be
                    one of the vaguest C-level roles as the CTO roles and
                    responsibilities depend on a number of factors.
                  </p>
                  <b>Roles & Responsibilities</b>
                  <ul>
                    <li>
                      Develop technical aspects of the company’s strategy for
                      alignment with its business goals
                    </li>
                    <li>
                      Capitalize on stakeholders’ feedback to advise on
                      necessary improvements and adjustments
                    </li>
                  </ul>
                  <a href="#">
                    <ApplyJobmodal />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-md-3 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Finance Officer</h5>
                  <p className="card-text">
                    Reporting to a manager and supporting the finance and
                    accounting teams, a Finance Officer job description should
                    include some of the below key duties and responsibilities.
                  </p>
                  <b>Roles & Responsibilities</b>
                  <ul>
                    <li>
                      Resolve financial disputes raised by the customer service
                      and sales teams
                    </li>
                    <li>
                      Being a key point of contact for other departments on
                      financial and accounting matters
                    </li>
                  </ul>
                  <a href="#">
                    <ApplyJobmodal />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-md-3 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Chief Technical Officer</h5>
                  <p className="card-text">
                    The CTO position and responsibilities is considered to be
                    one of the vaguest C-level roles as the CTO roles and
                    responsibilities depend on a number of factors.
                  </p>
                  <b>Roles & Responsibilities</b>
                  <ul>
                    <li>
                      Develop technical aspects of the company’s strategy for
                      alignment with its business goals
                    </li>
                    <li>
                      Capitalize on stakeholders’ feedback to advise on
                      necessary improvements and adjustments
                    </li>
                  </ul>
                  <a href="#">
                    <ApplyJobmodal />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
