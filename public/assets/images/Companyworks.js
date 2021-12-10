import React from 'react';

function Companyworks(props) {
    return (
        <div>
            <div className="container-fluid mt-4" id="companyworks">
                <div className="title text-center" >
                    <h2>How it Works</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 artcol">
                        <div className="row ">
                            <div className="col-6 artwork">
                                <img src="./assets/img/artwork-1.svg" alt="" height="200px" width="100%"></img>
                            </div>
                            <div className="col-6 artworkdesc">
                                 <h1 style={{color:"lightgray"}}>1</h1>
                                 <p><b>Do you have business services you need help with?</b></p>
                                 <p>We understand that the process is often confusing. Also, taking time out of your busy schedule can be very difficult.</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 artcol">
                    <div className="row ">
                            <div className="col-6 artwork">
                                <img src="./assets/img/artwork-2.svg" alt="" height="200px" width="100%"></img>
                            </div>
                            <div className="col-6 artworkdesc">
                                 <h1 style={{color:"lightgray"}}>2</h1>
                                 <p><b>Log on to Upaya from any device or platform</b></p>
                                 <p>Upaya has interactive videos that help you better understand the process and documentation related to various business services.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 artcol">
                        <div className="row ">
                            <div className="col-6 artwork">
                                <img src="./assets/img/artwork-3.svg" alt="" height="200px" width="100%"></img>
                            </div>
                            <div className="col-6 artworkdesc">
                                 <h1 style={{color:"lightgray"}}>3</h1>
                                 <p><b>Hire an Upaya professional to get your work done</b></p>
                                 <p>We have trained and vetted professionals on-hire who can assist you with the process</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 artcol">
                    <div className="row">
                            <div className="col-6 artwork">
                                <img src="./assets/img/artwork-4.svg" alt="" height="200px" width="100%"></img>
                            </div>
                            <div className="col-6 artworkdesc">
                                 <h1 style={{color:"lightgray"}}>4</h1>
                                 <p><b>Relax and unwind as Upaya takes care of your tasks</b></p>
                                 <p>Track your work progress through an interactive dashboard and get notified when the work is complete. Save time, reduce stress!</p>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default Companyworks;