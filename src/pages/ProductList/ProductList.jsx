import './ProductList.css';
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcements'
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';



const ProductList = () => {
  return (
    <div className='ProductList'>
      <Navbar/>
      <Announcement/>
      <h1> Face Cosmetics</h1>
      <div className='filterContainer'>
          <div className='filter'> <span>Filter Products:</span>
          <select className='filterSelect'>
            <option disabled selected>Categories</option>
            <option>Serum</option>
            <option>Lotion</option>
            <option>Essential Oil</option>
            <option>Hair Care</option>
            <option>Skin Care</option>
          </select>
        </div>
        <div className='filter'> <span>Sort Products:</span>
          <select className='filterSelect'>
          <option disabled selected>Products</option>
          <option>Newest</option>
          <option>Popular</option>
          <option>Price</option>
        </select>
        </div>
      </div>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductList
