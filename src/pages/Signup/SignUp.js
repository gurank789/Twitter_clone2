import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Mail, Apple,Twitter } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const SignupPage = () => {
  const navigate=useNavigate()

  let flag=false

  // function navigateLogin(){
  //   if(flag!=false){
  //   navigate("/")}
  //   else{
  //     navigate('/signup')
  //   }
  // } 

     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleDobChange = (e) => {
      setDob(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSignup = (e) => {
      e.preventDefault();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email. Please enter a valid email address.');
      return;
    }
    if (checkEmailExists(email)) {
      alert('This email is already registered. Please use a different email address.');
      return;
    }

    if (checkPhoneExists(phone)) {
      alert('This phone number is already registered. Please use a different phone number.');
      return;
    }
    

      const user = {
        name,
        email,
        phone,
        dob,
        password,
      };
  
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(user));;
      flag=true
  
      setName('');
      setEmail('');
      setPhone('');
      setDob('');
      setPassword('');
      
      alert('Form submitted successfully!');
      navigate("/")
      
    };
    const checkEmailExists = (email) => {
      
      const existingUser = JSON.parse(localStorage.getItem('user'));
      return existingUser && existingUser.email === email;
    };

    const checkPhoneExists = (phone) => {
      
      const existingUser = JSON.parse(localStorage.getItem('user'));
      return existingUser && existingUser.phone === phone;
    };
  
  
    return (
      <div className={styles['signup-container']}>
         <div className={styles['twitter-icon']}>
        <Twitter fontSize="large" />
      </div>
      <h1>Join Twitter today</h1>
        <div className={styles['signup-form-box']}>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <br />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <br />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={handleDobChange}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          
          <Button type="submit" variant="contained" disableElevation >
          Sign Up
        </Button>
        </form>
        </div>
      <div className={styles['signup-links']}>
        <p>Sign up with:</p>
        <a href="https://example.com/google-signup">
          <Mail />
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: '#db4a39',
              color: 'white',
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '16px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#c53727',
              },
            }}
          >
            Google Mail ID
          </Button>
        </a>
        <a href="https://example.com/apple-signup">
          <Apple />
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: '#000000',
              color: 'white',
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '16px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#1e1e1e',
              },
            }}
          >
            Apple ID
          </Button>
        </a>
      </div>
  
      <p >
        By signing up, you agree to the <a href="https://example.com/terms">Terms of Service</a> and{' '}
        <a href="https://example.com/privacy">Privacy Policy</a>, including Cookie Use.
      </p>
      <p>

        Have an account already? <Link to ="/">Log in</Link>

      </p>
     
    </div>
  );
};

export default SignupPage;