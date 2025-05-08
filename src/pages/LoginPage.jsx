import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [values,setValues] =useState({})
    const [error,setError] = useState('');
    const navigate =useNavigate();
    
    const handleChange =(e)=>{
        console.log(e);
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        })
    }
    console.log("values",values);
    

    function handleSubmit(e){
        e.preventDefault();

        const {username,password} = values;

        if(username==='saurabh' && password==='1234'){
            navigate('/');
            setError('');
        }
        else{
            setError('Please fill valid credentials');
        }
    }

  return (
    <div className="login-page">
        <div className="form-container">
            <Link to={'/'} className='text-center d-block'>
                <img src={logo} alt="" />
            </Link>
            <h3 className='text-center'>Login to Your Account</h3>
            <small className='text-danger d-block text-center'>{error}</small>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name='username' placeholder="Username" required />
                <input type="password" onChange={handleChange} name='password' placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
            <div className="text-center text-black-50">
                <div title='username:saurabh / password:1234'>Need Hint?</div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
