import React from 'react';
import "../assets/css/Aboutus.css";
import {Link} from "react-router-dom";

const Aboutus: React.FC = () => {
    return (
        <div className={"au-container"}>
            <div className={"au-header"}>

                <div className={"au-logo"}>
                    <a href="/dashboard">
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"au-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"au-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"au-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"au-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>


            </div>
            <div className={"au-body"}>
                <h1>About Us</h1>
                <p>If you are in search of a website that offers premium phone cases in Nepal, choose CaseIt. We are your trusted destination for top-quality phone cases, offering a diverse range of products at affordable prices. CaseIt is designed to provide you with a seamless shopping experience, coupled with exceptional customer service. Our goal is to become your go-to choice for premium phone cases in Nepal.</p>
                <h2>CaseIt - Your Best Choice for Premium Phone Cases in Nepal</h2>
                <p>At CaseIt, we have curated every aspect of our service with your satisfaction in mind:</p>
                <h2>Products:</h2>
                <p>Discover the widest selection of phone cases available, ranging from trendy designs to sturdy protective cases. Our collection includes cases for various phone models, ensuring there's something for everyone. Whether you're buying for yourself or gifting to a loved one, our vast selection and optional gift wrapping service have you covered.</p>
                <h2>Customer Satisfaction:</h2>
                <p>As one of the leading websites for online shopping in Nepal, we prioritize 100% customer satisfaction. If you encounter any issues with our service, simply reach out to us, and we'll go above and beyond to assist you.</p>
                <h2>Delivery:</h2>
                <p>Enjoy fast, reliable delivery services across Nepal. We offer reasonable charges and provide order tracking to keep you informed about your delivery status. Customers in Kathmandu benefit from free delivery, and if you prefer, you can also opt for our free Scheduled Collection Service.</p>
                <h2>Website:</h2>
                <p>Our user-friendly website is accessible 24/7, allowing you to browse and shop for phone cases effortlessly from your PC, laptop, tablet, or smartphone.</p>
                <h2>Pricing:</h2>
                <p>CaseIt offers competitive prices on premium phone cases, making online shopping in Nepal a convenient experience.</p>
                <h2>Returns:</h2>
                <p>Shop with confidence thanks to our 'refund or replace' returns policy.</p>
                <h2>Payments:</h2>
                <p>Rest assured that all payments made on our website are secure and encrypted, providing you with a safe and trusted online payment system. We also offer cash on delivery options for added convenience.</p>
                <h2>Discounts:</h2>
                <p>Take advantage of our daily and weekly discount deals to score quality phone cases at unbeatable prices. At CaseIt, we're committed to providing high-quality products, great prices, and superior customer service, making online shopping for phone cases in Nepal both affordable and enjoyable.</p>
            </div>





            <div className={"au-footer"}>
                <div className={"au-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2024 CaseIt Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"au-about-us"}>
                    <h1>CaseIt</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>





                </div>
                <div className={"au-logos"}>
                    <span>Connect with us:</span>
                    <a href="https://www.facebook.com/profile.php?id=61555012223662&is_tour_dismissed=true"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/fb.png"}
                            alt="Facebook"
                        />
                    </a>

                    <a href="https://www.instagram.com/luga.hub69/"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/insta.png"}
                            alt="Facebook"
                        />
                    </a>
                    <a href="https://www.threads.net/@luga.hub69"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/thread.png"}
                            alt="X"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
