import React from "react";

const BootstrapProject = () => {
  return (
    <>
      <h1 className="text-center text-success my-5  text-capitalize">
        Card with image are random
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img
                src="https://picsum.photos/200/300"
                className="card-img-top"
                alt="picsum"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Random Image</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col-sm">
              <div className="card">
                <img
                  src="https://picsum.photos/201/300"
                  className="card-img-top"
                  alt="picsum"
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">Random Image</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col-sm">
              <div className="card">
                <img
                  src="https://picsum.photos/204/300"
                  className="card-img-top"
                  alt="picsum"
                  height="200px"
                  width="204px"
                />
                <div className="card-body">
                  <h5 className="card-title">Random Image</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootstrapProject;
