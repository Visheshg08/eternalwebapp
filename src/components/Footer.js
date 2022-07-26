import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react';
function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          
          
              <div className="col-md-3">
                <h1 className="logo">Eternal Cloud Services </h1>
                <p className="footer-text">
                  Building on Trust
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={800}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={800} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={800}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={800}> Contact  </Link>
                  </li>
                </ul>
              
          </div>
          
          
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >admin@eternalcloudservices.com</Link>
                  </li>
              
                  <li>
                    <Link to="#" >+91 9988414815</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/eternal-cloud-services/"> Linkedin</a>
                  </li>
                </ul>
              
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
