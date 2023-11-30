import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className='regWrapper'>
      <h1>CREATE AN ACCOUNT</h1>
      <form className='regForm'>
        <input placeholder="first name"/>
        <input placeholder="last name"/>
        <input placeholder="username"/>
        <input placeholder="email"/>
        <input placeholder="password"/>
        <input placeholder="confirm password"/>
      
      <span className='agreement'>
        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
      </span>
      <button> REGISTER</button>
      <span>Already have an account?<Link to='/login'> </Link>Sign up</span>
      
      </form>
      </div>
    </div>
  )
}

export default Register
