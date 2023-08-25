import '../../index.css';
import logo from '../../Img/logo.jpg';
import { useState } from 'react';

const loggedInUser = () => {
  // API call to check if user is logged in
  return true;
};

const Logo = () => <img className="logo" src={logo} alt="food-logo" />;

const HeadComponents = () => {
  const [isLoggendIn, setIsLoggedIn] = useState(false);

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
        {isLoggendIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Log In</button>
        )}
      </div>
    </>
  );
};

export default HeadComponents;
