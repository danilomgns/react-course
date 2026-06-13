import { NavLink, useNavigate, useSearchParams } from 'react-router';
import { useState } from 'react';
import LogoWhiteImage from '../assets/images/logo-white.png';
import MobileLogoWhiteImage from '../assets/images/mobile-logo-white.png';
import SearchIconImage from '../assets/images/icons/search-icon.png';
import CartIconImage from '../assets/images/icons/cart-icon.png';
import './Header.css';

export function Header({ cart }) {
  let totalQuantity = 0;
  
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  })

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [searchInput, setSearchInput] = useState(search || '');

  function changeSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function searchProducts() {
    navigate(`/?search=${searchInput}`);
  }

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src={LogoWhiteImage} />
          <img className="mobile-logo"
            src={MobileLogoWhiteImage} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" onChange={changeSearchInput}/>

        <button className="search-button" onClick={searchProducts}>
          <img className="search-icon" src={SearchIconImage} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIconImage} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}