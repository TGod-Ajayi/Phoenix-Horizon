export default function Contact() {
    return (
        <>
        {/* Star Contact Area
    ============================================= */}
      <div className="contact-area default-padding">
        {/* Fixed BG */}
        <div className="fixed-bg left">
          <img src="assets/img/illustration/9.png" alt="Shape" />
        </div>
        {/* Fixed BG */}
        <div className="container">
          <div className="contact-items">
            <div className="row">
              <div className="col-lg-7 contact-box">
                <div className="form-items">
                  <h5>Contact Us</h5>
                  <h2>
                    Then book your trip from <br />
                    our exclusive offers.
                  </h2>
                  <form
                    action="assets/mail/contact.php"
                    method="POST"
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            type="email"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            type="text"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group comments">
                          <textarea
                            className="form-control"
                            id="comments"
                            name="comments"
                            placeholder="Tell Us About Project *"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                          Send Now
                        </button>
                      </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-lg-12 alert-notification">
                      <div id="message" className="alert-msg" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 left-info">
                <div className="info-items">
                  {/* Single Item */}
                  <div className="item">
                    <div className="icon">
                      <i className="flaticon-location" />
                    </div>
                    <div className="info">
                      <h5>Location</h5>
                      <p>
                        22 Baker Street, London, <br /> United Kingdom, W1U 3BW
                      </p>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="item">
                    <div className="icon">
                      <i className="flaticon-telephone" />
                    </div>
                    <div className="info">
                      <h5>Make a Call</h5>
                      <p>
                        +1-940-394-2948 <br /> +1-389-385-3807
                      </p>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="item">
                    <div className="icon">
                      <i className="flaticon-email" />
                    </div>
                    <div className="info">
                      <h5>Send a Mail</h5>
                      <p>
                        info@Maxa.com <br />
                        support@Maxa.com
                      </p>
                    </div>
                  </div>
                  {/* End Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Area */}
        </>
    )
}