import './Footer.css';
import logo from '../Assets/images/logo.png';
import { FaInstagram, FaFacebook, FaPinterest,FaTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
      <img src={logo} alt=''/>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randommised words which don't look even slightly believable.</p>
        
      </div>
      <div className='footer-center'>
       <h3>Useful Links</h3>
       <ul className='listItem'>
        <li><a href='#'>Olive Products</a></li>
        <li><a href='#'>Olive Benefits</a></li>
        <li><a href='#'>Skin care tips</a></li>
        <li><a href='#'>Beauty Secret</a></li>
        <li><a href='#'>About us</a></li>
        <li><a href='#'>Terms and Conditions</a></li>
       </ul>
      </div>
      <div className='footer-right'>
      <div className='contactItem'>
        <h3> Contact </h3>
        <p><MdMail style={{marginRight:"10px"}}/> contact@sage.email.com</p>
        <div className='social-container'>
            <div className='socialIcon' >
            <FaFacebook />
            </div>
            <div className='socialIcon' >
            <FaInstagram />
            </div>
            <div className='socialIcon' >
            <FaPinterest />
            </div>
            <div className='socialIcon' >
            <FaTwitter/>
            </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Footer
