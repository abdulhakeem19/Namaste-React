import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import logo from './Img/logo.jpg'


const Logo = () => (
    <img className="logo" src={logo} alt="food-logo" />
)

const HeadComponents = () => {
    return (
        <>
            <div className="header">
                <Logo />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadComponents />);