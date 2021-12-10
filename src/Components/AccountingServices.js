import React from "react";
import RequestServiceModal from "./RequestaServicemodal";

function AccountingServices(props) {
  return (
    <div id="page">
      <div className="container" id="accountingservices">
        <h2 className="text-center m-4 mb-md-5">Accounting Services</h2>
        <div className="row">
          <div className="col-md-4 p-2">
            {/* ****************************************************Card1 ********************/}
            <div className="card bg-info text-white mb-md-4 m-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">
                  AUDIT & ASSURANCE
                </h5>
                <p className="card-text">
                  Advising on risk mitigation where our objectivity, reliability
                  and transparency enables fair presentation of results and ease
                  of management analysis.
                </p>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Statutory Audit & Risk Advisory
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                    >
                      <div className="accordion-body">
                        We provide statutory audit & customized risk management
                        advice to keep the organization compliant with Nepalese
                        regulations, ensure that financial statements are
                        reliable and overall help you to curtail avoidable
                        losses.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Financial Statement Audit
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                    >
                      <div className="accordion-body">
                        We carry out Statutory and Tax Audits to ensure that
                        your financial statements Audit present a false and fair
                        view of financial positions and operational results in
                        accordance with the guidelines issued by the regulator.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Special Purpose Audit
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        We assist our clients with special purpose reviews
                        wherein we check on management Audits or regulator
                        specified areas viz. Corporate Social Responsibility,
                        Anti-money laundering, Information Technology Systems,
                        Grant utilization, etc.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading12">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse12"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse12"
                      >
                        Compliance Diagnostics
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse12"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading12"
                    >
                      <div className="accordion-body">
                        A specialized activity wherein we carry out a
                        comprehensive diagnostic check of your business to
                        identify compliance gaps, risks thereon and suggest
                        mitigation measures. This helps in building up your
                        corporate governance and provides comfort to the
                        Management, Board of Directors, Shareholders and
                        Auditors.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading13">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse13"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse13"
                      >
                        Virtual CFO
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse13"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading13"
                    >
                      <div className="accordion-body">
                        We act as your Virtual Chief Financial Officer (CFO),
                        providing analytics and business insights for decision
                        making without you having to maintain a full-fledged
                        finance function.
                      </div>
                    </div>
                  </div>
                </div>
                <RequestServiceModal />
              </div>
            </div>
            {/********************************************* Business advisory *****************************************/}
            <div className="card bg-warning text-white mb-md-4 m-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">
                  BUSINESS ADVISORY
                </h5>
                <p className="card-text">
                  From identifying the most suitable entry route to providing a
                  one stop shop for regulatory approvals and consolidate the new
                  set up and other advisory services to existing & newly set up
                  business.
                </p>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        Corporate Advisory
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFive"
                    >
                      <div className="accordion-body">
                        We assist our clients to examine a proposed action or
                        strategy vis-à-vis the Nepalese regulatory environment.
                        Our experts from varied service verticals work together
                        and provide clear advice on matters which could concern
                        Project Finance Consultancy, Foreign Exchange Management
                        Act (FEMA), Foreign Direct Investment (FDI), Company
                        Law, Direct and Indirect taxes, labor matters, Special
                        Economic Zone (SEZ), etc.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseSix"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSix"
                      >
                        Entry Strategy
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                    >
                      <div className="accordion-body">
                        We recommend the most appropriate structure to match
                        your Nepalese business strategy. We map risks and
                        necessary steps required to register and operate your
                        entity (be it Liaison, Branch, Project Office, Limited
                        Liability Partnership, Wholly Owned Subsidiary or a
                        Joint Venture in Nepal), in accordance with the
                        applicable regulatory and foreign exchange requirements.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseSeven"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSeven"
                      >
                        Factory Set-Up
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                    >
                      <div className="accordion-body">
                        We assist you in establishing a factory anywhere in
                        Nepal. We manage the entire Support process from
                        identifying an ideal location, key service
                        providers/contractors, to procuring the necessary
                        clearances from government bodies i.e. ‘Nepal Rastra
                        Bank’ (NRB), ‘Department of Industries’ (DOI), ‘Office
                        of Company Registrar’ (OCR) etc.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseEight"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseEight"
                      >
                        Secretarial Compliance
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                    >
                      <div className="accordion-body">
                        On a routine basis, we assist you to meet your statutory
                        requirements viz drafting and Compliances maintaining
                        statutory records such as minutes of meetings (Annual,
                        Shareholders, Board), appointment and resignation of key
                        personnel, increase/reduction in capital, etc. We
                        organize the office infrastructure and manpower during
                        the ‘in transit period’ when a company is in the process
                        of setting up, including acting as nominee resident
                        directors.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a href="#" className="btn btn-primary mt-3">
                  <AccountingServices />
                </a> */}
                <RequestServiceModal />
              </div>
            </div>
          </div>
          {/* ********************************CARD 2************************************/}
          <div className="col-md-4 p-2">
            {/* /*********************************Row2 Taxation */}
            <div className="card bg-success text-white mb-md-4 m-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">
                  TAXATION ADVISORY
                </h5>
                <p className="card-text">
                  Proactive and innovative solutions customized to create
                  certainty in structuring business transactions and advice on
                  emerging tax regulations.
                </p>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading14">
                      <button
                        className="accordion-button"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse14"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse14"
                      >
                        Planning and Advisory
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse14"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading14"
                    >
                      <div className="accordion-body">
                        We monitor the overall tax strategy keeping in view the
                        changing dynamics of Indian tax legislation. We review
                        your commercial and inter-company contracts, build tax
                        management positions and risk mitigation strategies,
                        conduct tax due diligence and undertake tax efficiency
                        analysis of your transactions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading15">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse15"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse15"
                      >
                        Indirect Taxation
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse15"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading15"
                    >
                      <div className="accordion-body">
                        We assist in regulatory compliances and advisory on
                        critical issues under Income Tax Act, VAT Act etc. We
                        advise on VAT implications on transactional issues,
                        cross border transactions, tax classification and
                        transaction structuring for achieving tax efficiency.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading16">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse16"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse16"
                      >
                        Representation
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse16"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading16"
                    >
                      <div className="accordion-body">
                        Our teams proactively manage risks and avoid conflict
                        with Nepalese revenue or Dispute Resolution appellate
                        authorities. Our partner-led representations assist in
                        the entire cycle of tax litigation i.e., drafting and
                        submitting full assessment replies, appearing before the
                        revenue officer.
                      </div>
                    </div>
                  </div>
                </div>
                <RequestServiceModal />
              </div>
            </div>

            {/* /***********************SOP IMplementation */}
            <div className="card bg-secondary text-white mb-md-4 m-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">
                  SOP DESIGN & IMPLEMENTATION
                </h5>
                <p className="card-text">
                  An SOP describes in detail the implementation of a business
                  policy. This includes:
                </p>
                <ul>
                  <li>
                    Fulfilling policy requirements such as regulatory policies,
                    internal standards, and/or industry best practices.
                  </li>
                  <li>
                    Mapping the applicable policy, standards, and practices to
                    an explicit, step-by-step set of actions.
                  </li>
                  <li>
                    Defining the goals that the process will accomplish, and
                    breaking these into individual steps to achieve that goal.
                  </li>
                  <li>
                    Assigning the roles responsible for carrying out each step.
                  </li>
                </ul>
                <RequestServiceModal />
              </div>
            </div>
          </div>
          {/* /*************************************Card3 ****************************** */}
          <div className="col-md-4 p-2">
            <div className="card bg-secondary text-white mb-md-4 m-2">
              <div className="card-body">
                <h5 className="card-title text-center mb-2">
                  ACCOUNTING & BUSINESS SUPPORT
                </h5>
                <p className="card-text">
                  Making optimal use of our presence in assisting with adherence
                  to complex Nepalese legislative framework including accounting
                  and regulatory compliance outsourcing.
                </p>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button
                        className="accordion-button"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseNine"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseNine"
                      >
                        Financial Accounting & MIS Reporting
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseNine"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingNine"
                    >
                      <div className="accordion-body">
                        Our teams are fully conversant with Nepalese and
                        International accounting software viz. Tally ERP,
                        SWASTIK, etc. We ensure that your accounts are
                        maintained in accordance with domestic regulations as
                        well as international reporting norms. Our teams review,
                        analyze and flag any potential issues to ensure timely
                        remedial action.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseTen"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTen"
                      >
                        Payroll Administration
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTen"
                    >
                      <div className="accordion-body">
                        We set-up, maintain and ensure timely and accurate
                        processing of employee payroll. We also assist in
                        preparation of HR manuals to document your HR policies
                        in compliance with Nepalese labor regulations and
                        setting-up social security benefits including insurance
                        and claim administration.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading11">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse11"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse11"
                      >
                        Regulatory Compliances
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse11"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading11"
                    >
                      <div className="accordion-body">
                        We assist in regulatory compliances and advise on
                        critical issues under various regulations enacted by the
                        Federal, State and Local Authorities. We provide a ‘one
                        stop shop’ solution to businesses to manage the
                        complexities of multiple compliances through a single
                        window.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Internal Controls & Audit
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        We review and evaluate the effectiveness of your
                        organization’s internal controls. Based on the risk
                        assessment, we evaluate the adequacy of existing
                        internal controls and perform checks whether these are
                        appropriately implemented. The processes, risks and
                        controls are documented, recommendations provided for
                        improvement and we stay involved through the
                        implementation.
                      </div>
                    </div>
                  </div>
                </div>
                <RequestServiceModal />
              </div>
            </div>
            {/* Row2 */}
            {/* /*********************************Transaction Advisory */}
            <div className="card bg-warning text-white mb-md-4 m-2">
              {" "}
              <div className="card-body">
                <h5 className="card-title text-center mb-2">
                  TRANSACTION ADVISORY
                </h5>
                <p className="card-text">
                  End-to-end advisory for clients on inorganic growth
                  strategies. Specialized team to guide on project financing and
                  banking.
                </p>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading17">
                      <button
                        className="accordion-button"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse17"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse17"
                      >
                        Project Finance Consulting
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse17"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading17"
                    >
                      <div className="accordion-body">
                        End-to-end support on project finance process with
                        Banking & Financial Institution (BFIs). We assist
                        clients in understanding and realizing the potential
                        value of their business. We work closely with them to
                        devise tailored strategies during Project financing
                        process & negotiations with banks.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading18">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse18"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse18"
                      >
                        Due Diligence
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse18"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading18"
                    >
                      <div className="accordion-body">
                        We offer both desktop due diligence i.e. promoter and
                        company background checks as well as detailed Financial
                        and Tax Due Diligence involving on-site reviews and
                        interviews with the management. We also offer
                        post-merger integration support.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading19">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse19"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse19"
                      >
                        Valuation
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse19"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading19"
                    >
                      <div className="accordion-body">
                        We select the most appropriate, internationally
                        acceptable valuation technique to arrive at a fair
                        business value prior to accepting or making an offer.
                        Valuations can be done for family settlements, dispute
                        resolutions, purchase price allocations, etc.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading20">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapse20"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse20"
                      >
                        Fund Raising
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse20"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading20"
                    >
                      <div className="accordion-body">
                        We help our clients raise growth capital through venture
                        capital, private equity or banking channels (non-equity)
                        by offering turnkey support involving preparation of
                        pitch documents, building of a valuation model and
                        assist during the ensuing negotiations.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a href="#" className="btn btn-primary mt-3">
                  <AccountingServices />
                </a> */}
                <RequestServiceModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountingServices;
