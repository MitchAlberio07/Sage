import './Newsletter.css';
import { IoSend } from "react-icons/io5";

const Newsletter = () => {
  return (
    <div className='newsContainer'>
        <h1>Newsletter</h1>
        <div className='newsDesc'>Get timely updates from your favorite products.</div>
        <div className='inputContainer'>
            <input placeholder='Your email'/>
            <button>
                <IoSend />
            </button>
        </div>

    </div>
  )
}

export default Newsletter
