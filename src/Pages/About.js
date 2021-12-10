import React from "react";
import App from "../App";
import Appdownload from "../Components/Appdownload";
import Services from "../Components/Services";
import Whyus from "../Components/Whyus";

function About(props) {
  return (
    <div id="page">
      <div className="row d-flex justify-content-center m-md-5 m-2">
        <h2 className="text-center">About Solutech</h2>
        <p className="text-justify p-md-3" style={{ color: "#00" }}>
          Solutech is a one stop platform for all business needs. It is an
          online marketplace for various business related services, that ranges
          from registration to liquidation, along with all the compliance,
          financial & accounting work of individuals, small & medium enterprises
          and business organizations. Envisioned as a 360° solution to all the
          business-related legal, advisory and financial services such as
          registration, compliance, accounts, taxation, management consulting,
          documentation and other various legal and financial complexities that
          arise in day to day business transactions, the platform connects
          service seekers to ‘Solutech Professionals’ for getting their work
          done efficiently & economically. Solutech is different from the
          traditional way of providing services as it incorporates tech-enabled
          responsive dashboards that is used both by service-providers and
          service-seekers to complete a work in a quick, reliable and
          transparent manner. Solutech is owned, managed and operated by a team
          of professionals with extensive experience in law, finance,
          accounting, assurance, management and information technology.
        </p>
      </div>

      <Appdownload />
      <Services />
      <Whyus />
    </div>
  );
}

export default About;
