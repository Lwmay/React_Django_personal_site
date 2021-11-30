import React from 'react';

const AreaInterest = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 ml-auto mr-auto text-center">
                    <h2 className="title">Mes centres d'intérêts</h2>
                    <h5 className="description">Jetez un œil à certaines des choses sur lesquelles j'aime travailler.</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="card card-pricing">
                        <div className="card-body">
                            <div className="card-icon icon-white ">
                                <i className="material-icons">weekend</i>
                            </div>
                            <h3 className="card-title">Free</h3>
                            <p className="card-description">This is good if your company size is between 2 and 10
                                Persons.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card card-pricing ">
                        <h6 className="card-category"> Small Company</h6>
                        <div className="card-body">
                            <div className="card-icon icon-rose ">
                                <i className="material-icons">home</i>
                            </div>
                            <h3 className="card-title">29$</h3>
                            <p className="card-description">This is good if your company size is between 2 and 10
                                Persons.</p>
                        </div>
                        <div className="card-footer justify-content-center ">
                            <a href="#pablo" className="btn btn-round btn-rose">Choose Plan</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card card-pricing card-plain">
                        <h6 className="card-category"> Medium Company</h6>
                        <div className="card-body">
                            <div className="card-icon icon-white ">
                                <i className="material-icons">business</i>
                            </div>
                            <h3 className="card-title">69$</h3>
                            <p className="card-description">This is good if your company size is between 11 and 99
                                Persons.</p>
                        </div>
                        <div className="card-footer justify-content-center ">
                            <a href="#pablo" className="btn btn-round btn-white">Choose Plan</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card card-pricing card-plain">
                        <h6 className="card-category"> Extra Pack</h6>
                        <div className="card-body">
                            <div className="card-icon icon-white ">
                                <i className="material-icons">account_balance</i>
                            </div>
                            <h3 className="card-title">159$</h3>
                            <p className="card-description">This is good if your company size is 99+ Persons.</p>
                        </div>
                        <div className="card-footer justify-content-center ">
                            <a href="#pablo" className="btn btn-round btn-white">Choose Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreaInterest;