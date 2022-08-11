import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>LeyeStore</h1>
            <p>
              your number one online shopping site in Nigeria. We are an online
              store where you can purchase all your electronics, as well as
              books, home appliances, kiddies items, fashion items for men,
              women, and children; cool gadgets, computers, groceries,
              automobile parts, and more on the go. What more? You can have them
              delivered directly to you.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                30 Moses Ogungbeye, Olowoira, Berger, Lagos State, Nigeria
              </li>
              <li>Email: olaleyeolabode121@gmail.com</li>
              <li>Phone: +234915348687</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <form>
            <h3>
              Get the latest and greatest offers from us by subscribing to our
              newsletter
            </h3>
            <input type="text" placeholder="Enter Our Email" />
            <button>Subscribe</button>
          </form>
        </div>
        <p className="love">made with 🥰 by olabode</p>
      </footer>
    </>
  );
};

export default Footer;
