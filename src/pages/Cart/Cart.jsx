import './Cart.css'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcements'
import Footer from '../../components/Footer/Footer';
import { IoIosRemove, IoIosAdd } from "react-icons/io";

const Cart = () => {
  return (
    <div >
      <Navbar/>
      <Announcement/>
      <div className='cartWrapper'>
      <h1>YOUR CART</h1>
      <div className='top'>
        <button>CONTINUE SHOPPING</button>
        <div className='topText'>
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist(0)</span>
        </div>
        <button className='checkoutBtn'>CHECKOUT NOW</button>
      </div>
      <div className='bottom'>
        <div className='cartInfo'>
            <div className='productt'>
                <div className='cartImg'>
                <img src='https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                </div>
                <div className='details'> <span><b>Product:</b> Sage Hand Moisturizing Lotion</span>
                <span><b>ID:</b> 987456123</span>
                <span><b>Flavor:</b>Olive & Jasmine</span></div>
                <div className='priceDetail'>
                    <div className='ProductamountContainer'>
                     <div>
                        <IoIosAdd /> 
                        <span>2</span>
                        <IoIosRemove />
                     </div>
                  <br/>
                    <div className='productPrice'> $30</div>                   
                    </div>
                </div>
               
            </div>

            <hr/>
            <div className='productt'>
                <div className='cartImg'>
                <img src='https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                </div>
                <div className='details'> <span><b>Product:</b> Sage Hand Moisturizing Lotion</span>
                <span><b>ID:</b> 987456123</span>
                <span><b>Flavor:</b>Olive & Jasmine</span></div>
                <div className='priceDetail'>
                    <div className='ProductamountContainer'>
                     <div>
                        <IoIosAdd /> 
                        <span>2</span>
                        <IoIosRemove />
                     </div>
                  <br/>
                    <div className='productPrice'> $30</div>                   
                    </div>
                </div>
               
            </div>
        </div>
        <div className='summary'>
            <h1> ORDER SUMMARY</h1>
            <div className='summaryItem'> 
                <span>Subtotal</span>
                <span>$80</span>
            </div>
            <div className='summaryItem'> 
                <span>Estimated Shipping</span>
                <span>$5.90</span>
            </div>
            <div className='summaryItem'> 
                <span>Shipping Discount</span>
                <span>$ -5.90</span>
            </div>
            <div className='summaryItem'> 
                <span>Total</span>
                <span>$80</span>
            </div>
            <button>CHECKOUT</button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
