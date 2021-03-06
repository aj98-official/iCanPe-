import React from "react";
import pic from "../../assets/images/contact-form-img.png";
// import PrimaryBtn from "../Buttton/btn";
import useWindowDimensions from "../../Tools/window-dimensions";
const ContactForm = () => {
  const size = useWindowDimensions();
  return (
    <div className="">
      <div className="row">
        <div className="col">
          <h1 className="mb-4">Want to learn more about our product?</h1>
          <p className="pb-3">
            Kindly fill your details and we’ll reach out to you soon.{" "}
          </p>
          <div className={"col-lg-9 contact-form py-5 " + ((size > 767)? "ps-5" : "ps-3 pe-3")}>
            <div className="form-group mb-3">
              <label className="control-label mb-2 form-label-text" for="fname">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="fname"
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label
                className="control-label mb-2 form-label-text "
                for="email"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="control-label mb-2 form-label-text ">
                Phone No.
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="lname"
                />
              </div>
            </div>

            <div className="form-group">
              <label
                className="control-label mb-2 form-label-text"
                for="comment"
              >
                Any Comments (Optional)
              </label>
              <div className="col-sm-10">
                <textarea
                  placeholder="Your message..."
                  className="form-control"
                  rows="5"
                  id="comment"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="mt-4 col-sm-10">
                <button
                  style={{ width: "100%" }}
                  type="submit"
                  className="btn btn primary-btn btn-lg"
                >
                  {" "}
                  Request a Demo{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        {size > 991 ? (
          <div className="col-lg-5">
            <img src={pic} alt="mail-img" className="img-fluid" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ContactForm;
