import { Button, Input } from "@nextui-org/react";
import React from "react";

function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="text-w nav-link p-0 ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0 ">
                  Category
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0 ">
                  Query
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0 ">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="text-w nav-link p-0 ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0 ">
                  Category
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0">
                  Contact
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0 ">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="text-w nav-link p-0 ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0 ">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0 ">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className=" text-w nav-link p-0 ">
                  About
                </a>
              </li>
            </ul>
          </div>
         
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5 className="text-w">Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <Input 
                className="my-1"
                  id="newsletter1"
                  type="text"
                  placeholder="Email address"
                />
                <Button auto className="mx-1">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="text-w ">© 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="/">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="/">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="/">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
