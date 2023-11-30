import './Productss.css'
import Navbar from '../../components/Navbar/Navbar'
import Announcements from '../../components/Announcement/Announcements'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { IoIosRemove, IoIosAdd } from "react-icons/io";

const Productss = () => {
  return (
    <div>
      <Navbar/>
      <Announcements/>
      <div className='productWrapper'>
        <div className='productImg'>
        <img src='https://images.pexels.com/photos/10963088/pexels-photo-10963088.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
        </div>
        <div className='productInfo'>
            <h1>Olive & Jasmine Serum </h1>
            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <span> Price:  $20 </span>
            <div className='flavorFilter'>
                <select className='filterSelect'>
                <option disabled selected>Flavor</option>
                <option>Olive</option>
                <option>Olive & Jasmine</option>
                <option>Olive & Sandalwood</option>
                </select>
            </div>
            <div className='addContainer'>
                <div className='amountContainer'>
                <IoIosRemove />
                <span>1</span>
                <IoIosAdd />
                
                <button>Add to Cart</button>
                </div>
            </div>
            

            
       
      </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Productss
