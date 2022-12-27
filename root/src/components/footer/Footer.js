import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-12 mx-auto">
                <div className="row">
                <div className="col-6 col-lg-6">
                  <h2>About Us</h2>                
                  <ul className="list-unstyled">
                            <li>This website a full stack service provider for all real estate needs,with 15+ services including home loans, pay rent, packers and  movers, legal assistance, property valuation, and expert advice.
                             As the largest platform for buyers and sellers of property to connect in a transparent manner, Magicbricks has an active base of over 15 lakh property listings.</li>                                                   
                        </ul>               
                </div>

                <div className="col-6 col-lg-6">
                  <h2>Properties in India</h2>                
                  <ul className="list-unstyled">
                    <li>
                            
                            <Link to ="/">Property in New Delhi </Link>
                            <Link to="/"> Property in Mumbai |</Link> 
                            <Link to="/"> Property in ChennLinki |</Link> 
                            <Link to="/"> Property in Pune |</Link> 
                            <br/>
                            <Link to="/"> Property in Noida |</Link>
                            <Link to="/"> Property in Gurgaon |</Link>
                            <Link to="/"> Property in Bangalore |</Link>
                            <Link to="/"> Property in Ahmedabad |</Link>
                        </li>                                                       
                        </ul> 
                        
                        <div className="row">   
                        <div className="col-1 mx-auto">
                      <a href="https://www.facebook.com">
                      <i className="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-1 mx-auto">
                      <a
                        href="https://www.instagram.com/">
                      
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div> 
                    <div className="col-1 mx-auto">
                    <a
                        href="https://www.youtube.com/">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </a>  
                    </div>
                    
                    <div className="col-1 mx-auto">
                    <a
                        href="https://www.twitter.com/">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </a>
                    </div>
                    </div>          
                </div>

              <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                <div className="row">
                    <div className="col-3 mx-auto">
                    <Link to="/helpcenter">Help center</Link>
                     </div>
                    <div className="col-3 mx-auto">
                    <Link to="/terms">Terms & Condition</Link>
                    </div>
                    {/* <div className="col-3 mx-auto">
                    <Link to="/feedback">Feedback</Link> 
                    </div>  */}
                    <div className="col-3 mx-auto">
                    <Link to="/privacypolicy">Privacy Policy</Link>
                    </div>                   
                 </div>                 
              </div>

              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 Real Estate. All rights reserved.
                </p>
              </div>
                </div>
            </div>

        </div>
      </footer>
    </>
  )
}
export default Footer;  
        