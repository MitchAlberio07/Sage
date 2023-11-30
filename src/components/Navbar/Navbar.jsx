import './Navbar.css';
import logo from '../Assets/images/logo.png'
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className='navbar-wrapper'>
        <div className='left'>
          <img src={logo} alt=''/>
          <div className='searchContainer'>
            <input/>
            <IoSearch />
          </div>
        </div>
        <div className='center'>
          <ul className='menu'>
            <li><Link to= '/' className='menu-item'>Home</Link></li>
            <li><Link to= '/shop' className='menu-item' >Shop</Link></li>
            <li><Link to= '/shop' className='menu-item'>Gift Packages</Link></li>
            <li><Link to= '/shop' className='menu-item'>Blog</Link></li>
          </ul>


          
        
        </div>
        <div className='right'>
          <ul className='menu'>
            <li><Link to= '/login' className='menu-item'>SIGN IN</Link></li>
            <li><Link to= '/cart' className='menu-item'><MdOutlineShoppingCart className='cart' /></Link></li>
        </ul>

        
        </div>
      </div>
    </div>
  )
}

export default Navbar
