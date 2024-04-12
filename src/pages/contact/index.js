import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";
import { Row, Col} from "react-bootstrap";
import { contactConfig } from "../../content_option";
import backgroundImage from "../images/ContactPic.jpeg"

export const ContactUs = () => {
  return (
    <HelmetProvider>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
                <Row className="mb-5 mt-3 pt-md-3">
                  <Col lg="1000">
                    <h1 className="display-4 mb-4">Contact Me</h1>
                    <hr className="t_border my-4 ml-0 text-left" />
                  </Col>
                </Row>
                <Row className="sec_sp">
                  <Col lg="1000" className="mb-5 align-self-center" >
                    <h3 className="color_sec py-4">Get in touch</h3>
                    <address>
                      <strong>Email:</strong>{" bowenzhu66@gmail.com"}
                      <br />
                      <br />
                      {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                        <p>
                          <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                        </p>
                      ) : (
                        ""
                      )}
                    </address>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
    </HelmetProvider>
  );
};