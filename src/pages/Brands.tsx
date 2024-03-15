import React from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import '../assets/css/Brands.css';

interface Item {
    id: number;
    itemName: string;
    itemImage: string;
    itemDescription: string;
    itemPerPrice: number;
    itemQuantity: number;
    // Add more properties as needed
}

const Brands: React.FC = () => {
    const { brandName } = useParams<{ brandName: string }>();
    const navigate = useNavigate();

    // Fetch products based on brand name
    const { data: items, isLoading, isError } = useQuery<Item[]>({
        queryKey: ['getProductsByBrand', brandName],
        queryFn: () =>
            axios
                .get(`http://localhost:8082/item/getItemsByBrandName/${brandName}`)
                .then((response) => {
                    console.log('API Response:', response.data);
                    return response.data;
                }),
    });

    console.log('items:', items);
    console.log('isLoading:', isLoading);
    console.log('isError:', isError);

    const handleProductClick = (productId: number) => {
        // Use the navigate function to go to the product details page
        navigate(`/products/${productId}`);
    };


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching products.</div>;
    }

    return (
        <div className={'brand-container'}>
            <div className={'brand-header'}>
                <div className={'brand-logo'}>
                    <a href="/dashboard">
                        <img width={100} src={"../images/Plantdecor/logo1.png"} alt="Logo"/>
                    </a>
                </div>
                <div className={'brand-btn_before'}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus">
                        <button>Contact Us</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                </div>

                <div className={'brand-searchbar'}>
                    <input type={'text'} placeholder={'Search Product'}/>
                </div>
                <div className={'brand-search_button'}>
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className={'brand-btn-wrapper'}>
                    <button>
                        <i className="fa-solid fa-cart-shopping cart-icon"></i>Cart
                    </button>
                    <Link to={'/wishlist'}>
                        <button>
                            <i className="fa-regular fa-heart"></i>Wishlist
                        </button>
                    </Link>
                    <Link to="/Myaccount">
                        <button>My Account</button>
                    </Link>
                    <Link to="/">
                        <button>Sign Out</button>
                    </Link>
                </div>
            </div>

            <div className={'brand-main-content'}>
                <h1>{brandName} Products</h1>
                <div className={'brand-product-list grid-view'}>
                    {Array.isArray(items) && items.length > 0 ? (
                        items.map((item) => (
                            <div key={item.id} className={'product-card'} onClick={() => handleProductClick(item.id)}>
                                <div className={'item-image'}>
                                    <img src={"data:image/png;base64, " + item?.itemImage} width={100} alt={item?.itemName} />
                                </div>
                                <div className={'item-details'}>
                                    <h2>{item.itemName}</h2>
                                    <p>{item.itemDescription}</p>
                                    <p>Price: Rs.{item.itemPerPrice}</p>
                                    {/* Add more details as needed */}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products found for brand '{brandName}'</p>
                    )}
                </div>
            </div>
            <div className={'brand-footer'}>
                <div className={'brand-get-help'}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare">
                        <button>Customer Care</button>
                    </Link>
                    <Link to="/Payment">
                        <button>Payment Options</button>
                    </Link>
                    <Link to="/returnandrefundpolicy">
                        <button>Return and Refund Policy</button>
                    </Link>
                    <Link to="/PrivacyPolicy">
                        <button>Privacy Policy</button>
                    </Link>
                    <Link to="/Termsandcondition">
                        <button>Terms and Conditions</button>
                    </Link>
                    <span>@2023 PlantDecor Pvt. Ltd. All Rights Reserved</span>
                </div>
                <div className={'brand-about-us'}>
                    <h1>Plant Decor</h1>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                    <Link to="/Contactus">
                        <button>Contact Us</button>
                    </Link>
                    <Link to="/Careers">
                        <button>Careers</button>
                    </Link>
                </div>
                <div className={'brand-logos'}>
                    <span>Connect with us:</span>
                    <a
                        href="https://www.facebook.com/profile.php?id=61555012223662&is_tour_dismissed=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img width={43} src={'images/fb.png'} alt="Facebook"/>
                    </a>

                    <a
                        href="https://www.instagram.com/luga.hub69/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img width={43} src={'images/insta.png'} alt="Instagram"/>
                    </a>
                    <a
                        href="https://www.threads.net/@luga.hub69"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img width={43} src={'images/thread.png'} alt="Threads"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Brands;