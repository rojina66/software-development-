import {Link} from "react-router-dom";
import "../assets/css/AdminAu.css";
import React from "react";

// import React from "react";
function AdminAu() {
    return (
        <div className={"aa-container"}>
            <div className={"aa-buttons"}>
                <div className={"aa-top"}>
                    <a href="/admin/products">
                        <img src={"../images/Logo.png"}
                             width={100}
                             alt={"logo"}
                        />

                    </a>
                    <span>CaseIt</span>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={"aa-btn"}>
                    <div className="ap-dropdown">
                        <button className="ap-dropbtn"><i className="fa-solid fa-clipboard"></i>Products<i className="fa-solid fa-caret-down" style={{ marginLeft: '57px' }}></i></button>
                        <div className="ap-dropdown-content">
                            <a href="/admin/products">View Product</a>
                            <a href="/admin/addproduct">Add Product</a>

                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-list"></i>Categories</button>*/}
                    <div className="cgr-dropdown">
                        <button className="cgr-dropbtn"><i className="fa-solid fa-list"></i>Categories<i className="fa-solid fa-caret-down" style={{ marginLeft: '40px' }}></i></button>
                        <div className="cgr-dropdown-content">
                            <a href="/admin/viewcategory">View Category</a>
                            <a href="/admin/addcategory">Add Category</a>
                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-tag"></i>Brands</button>*/}
                    <div className="brd-dropdown">
                        <button className="brd-dropbtn"><i className="fa-solid fa-tag"></i>Brands<i className="fa-solid fa-caret-down" style={{ marginLeft: '69px' }}></i></button>
                        <div className="brd-dropdown-content">
                            <a href="/admin/viewbrand">View Brand</a>
                            <a href="/admin/addbrand">Add Brand</a>
                        </div>
                    </div>
                    <Link to={"/admin/totalorders"}><button className={"products"}><i className="fa-solid fa-cart-shopping"></i>Total Orders</button></Link>
                    <Link to={"/admin/users"}><button className={"products"}><i className="fa-solid fa-users"></i>Users</button></Link>
                    {/*<button className={"products"}><i className="fa-solid fa-user"></i>Profile</button>*/}
                    <div className="pr-dropdown">
                        <button className="pr-dropbtn"><i className="fa-solid fa-user"></i>Profile<i className="fa-solid fa-caret-down" style={{ marginLeft: '70px' }}></i></button>
                        <div className="pr-dropdown-content">
                            <a href="/admin/profile">View Profile</a>
                            <a href="/admin/editprofile">Edit Profile</a>
                            <a href="/admin/changepassword">Change Password</a>
                        </div>
                    </div>
                    <Link to={"/admin/aboutus"}><button className={"products"}><i className="fa-regular fa-address-card"></i>About Us</button></Link>
                    <Link to={"/admin/login"}><button className={"products"}><i className="fa-solid fa-arrow-right"></i>Log Out</button></Link>

                </div>
            </div>
            <div className={"aa-display"}>
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

        </div>
    )
}
export default AdminAu;
