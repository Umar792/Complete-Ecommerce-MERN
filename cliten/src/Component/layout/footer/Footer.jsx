import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import {
  AiFillMail,
  AiFillPhone,
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";

import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <img src="./icon.jpg" alt="" className="w-[100px] h-[100px] m-1" />
        <p>1: Firdous Market Gulberg Lahore, 54000 Pakistan</p>
        <p>2: Garh More Jhung,35200 Pakistan</p>
        <p>
          <AiFillMail />
          <spna>clickordernow@gmail.com</spna>
        </p>
        <p>
          <AiFillPhone />
          <span> +923003967143</span>
        </p>
      </div>

      {/* -------- */}
      <div className="footer_2">
        <h2>Information</h2>
        <p>High Quality is our first priority.</p>
        <p>Contact us for any query 24 hours a day, 7 days a week.</p>
        <p>Free Shipping on all local orders worth Rs. 5000 & above.</p>
      </div>
      {/* ============  */}
      <div className="footer_3">
        <h2>Follow Us</h2>
        <div className="svgs">
          <a
            href="https://www.instagram.com/clickordern_clothes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="text-[#EF1740]" />
          </a>
          <a
            href="https://www.youtube.com/@clickordernow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube className="text-[red]" />
          </a>
          <a
            href="https://www.facebook.com/people/Clickordernow/100091245946425/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook className="text-[#1877F2]" />
          </a>
          <a
            href="https://www.whatsapp.com/catalog/923003967143/?app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className="text-[#17A304]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
