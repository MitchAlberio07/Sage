import './Register.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='register'>
      <div className='regWrapper logWrap'>
      <h1>CREATE AN ACCOUNT</h1>
      <form className='regForm log'>
        <input placeholder="username"/>
        <input placeholder="password" type='password'/>
      <button> LOG IN</button>
      <div className='login'>
         <a href='#'>Forgot password?</a><br/>
         <Link to='/register'> Create an account</Link>
      </div>
      </form>
      </div>
    </div>
  )
}

export default Login
