import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../Assets/Logo/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerBox my-8" data-theme="luxury">
      <footer className="p-20 footer font-semibold  text-base-content">
        <div>
          <div className="flex justify-center items-center gap-10">
            <h2 href="/" className="me-4 text-reset">
              <FaFacebook size="30px" fab icon="facebook-f" />
            </h2>
            <h2 href="/" className="me-4 text-reset">
              <FaTwitter size="30px" fab icon="twitter" />
            </h2>
            <h2 href="/" className="me-4 text-reset">
              <FaGoogle size="30px" fab icon="google" />
            </h2>
            <h2 href="/" className="me-4 text-reset">
              <FaInstagram size="30px" fab icon="instagram" />
            </h2>
            <h2 href="/" className="me-4 text-reset">
              <FaLinkedin size="30px" fab icon="linkedin" />
            </h2>
            <h2 href="/" className="me-4 text-reset">
              <FaGithub size="30px" fab icon="github" />
            </h2>
          </div>
          <section className="">
            <form action="">
              <h2 className="d-flex justify-content-center">
                <h2 size="auto">
                  <h2 className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </h2>
                </h2>

                <h2 md="5" start>
                  <h2
                    contrast
                    type="email"
                    label="Email address"
                    className="mb-4"
                  />
                </h2>

                <h2 size="auto">
                  <h2 outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </h2>
                </h2>
              </h2>
            </form>
          </section>
          <input
            type="text"
            placeholder="Search Here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        <div>
          <span className="footer-title">Explore Us</span>
          <h2 href="/" className="link link-hover">
            Used Cars
          </h2>
          <h2 href="/" className="link link-hover">
            Used Bikes
          </h2>
          <h2 href="/" className="link link-hover">
            New Cars
          </h2>
          <h2 href="/" className="link link-hover">
            Cool Rides
          </h2>
          <h2 href="/" className="link link-hover">
            Membership Cards
          </h2>
          <h2 href="/" className="link link-hover">
            Forums
          </h2>
          <h2 href="/" className="link link-hover">
            Autoshow
          </h2>
          <h2 href="/" className="link link-hover">
            Sitemap
          </h2>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <h2 href="/" className="link link-hover">
            About Us
          </h2>
          <h2 href="/" className="link link-hover">
            Careers
          </h2>
          <h2 href="/" className="link link-hover">
            Advertise
          </h2>
          <h2 href="/" className="link link-hover">
            Contact Us
          </h2>
          <h2 href="/" className="link link-hover">
            Post an Ad
          </h2>
          <h2 href="/" className="link link-hover">
            Privacy Policy
          </h2>
          <h2 href="/" className="link link-hover">
            FAQs
          </h2>
        </div>

        <div>
          <span className="footer-title">Help Center</span>
          <h2 href="/" className="link link-hover">
            Help & Support
          </h2>
          <h2 href="/" className="link link-hover">
            FAQs
          </h2>
          <h2 href="/" className="link link-hover">
            Account Issue
          </h2>
          <h2 href="/" className="link link-hover">
            Fake Ads
          </h2>
          <h2 href="/" className="link link-hover">
            Buy Membership
          </h2>
          <h2 href="/" className="link link-hover">
            Terms of Services
          </h2>
          <h2 href="/" className="link link-hover">
            History
          </h2>
        </div>
      </footer>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <img className="h-14" src={logo} alt="" />
          <h2>Copyright © 2022 - Kh Sultana </h2>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <h2 href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </h2>
          <h2 href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </h2>
          <h2 href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </h2>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
