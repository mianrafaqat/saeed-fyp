import React from "react";
import "./Footer.scss";
import { footerLinks } from "../../constant/dummy";

const Footer = () => {
  return (
    <div className="footer">
      <div className=" container">
        <div className="footerLinks">
          {footerLinks.map((link) => (
            <div key={link.title} className="footerLink">
              <h3>{link.title}</h3>
              {link.links.map((item) => (
                <p>{item.title}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
