import React, { useState } from 'react'
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import './css/Login.css'
import { Auth } from '../firebaseConnection/FireBaseUtils'
 import svgLogin from 'assessts/login.svg'
 import google from 'assessts/google.svg'
 import facebook from 'assessts/facebook.svg'
 import linkedin from 'assessts/linkedin.svg'
import { signUpWithGoogle } from '../firebaseConnection/FireBaseUtils'
import { Button } from '@mui/material'
import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom'
import Cards from './Cards'
import { useNavigate } from 'react-router'
import {signInWithEmailLink}from 'firebase/auth'
import { useEffect } from 'react'
import userImage from 'assessts/userImage.svg'
const Login :any= () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState <any>('')
  const [password,setPassword]=useState('')
  const [loginMsgError,setLoginMsgError]=useState('')
 useEffect(()=>{
  onAuthStateChanged(Auth,(currentUser)=>{
    setEmail(currentUser?.email)
  })
 },[])
  
  const handleSignIn:any=()=>{
    
   if(email =='' || password ==''){
       setLoginMsgError('Please Enter Valid Data')
   }else {
    // if(Auth.currentUser?.email=== email && Auth.currentUser.)
    signInWithEmailAndPassword(Auth ,email,password).then((res)=>{
      localStorage.setItem('username','')
      localStorage.setItem('userEmail',email)
      localStorage.setItem('userImage',userImage)
      navigate('/products')
      setLoginMsgError('')
    }).catch((err)=>console.log(err))
  
   }
  }
 {
  return (
  (localStorage.getItem('username')!==null)? (navigate('/products')): (
  
    <>
      <MediaQuery minWidth={950}>
      <div className='login-container'>
        <div className='box-registration'>
          <div className='msg-box-register'>
              <div>Welcome To<span className='app-logo-login'> I-Shopping</span></div>
              <div>No Account ?<Link style={{'textDecoration':'none'}} to={'/register'}> <span className='sign-up-btn'> Sign Up</span></Link></div>
          </div> 
          <div className='signIn-text'> <h2>Sign in</h2></div>
          <div className='accounts-sign-in'>
            <div className='google-div' onClick={signUpWithGoogle}> <img src={google}/> Sign In With Google</div>
            <div className='facebook-div'> <img src={facebook}/></div>
            <div className='linkedin-div'><img src={linkedin}/></div>
          </div>
          <div className='user-inputs'>
          <div className='username'>
                <div>Enter username or Email</div>
                <div><input value={email} onChange={(event)=>{setEmail(event.target.value)}}/></div>
              </div>
              <div className='password'>
                <div>Enter your password</div>
                <div><input type={'password'} value={password} onChange={(event)=>{setPassword(event.target.value)}}/></div> <span style={{'color':'red',"fontSize":'0.8rem'}}>{loginMsgError}</span>
              </div>
              <div className='forget-password'><a> Forget Password</a></div>
            </div>
            <div  ><Button className='btn-sign-in' variant='contained' onClick={handleSignIn}>Sign in</Button></div>
          
           </div>
          <div className='first-half-section'>
            <div className='login-logo'>I-Shopping</div>
            <div className='login-content'>
              <div className='login-text'>
              <div className='text-login-first-child'>Sign in </div> 
              for better experience and to  Be Always updated  
              </div>
              <div className='svg-illustrator'> <img src={svgLogin}/></div>
            </div>
          </div>

          <div className='second-half-section'> </div>
      </div>
      </MediaQuery>
      <MediaQuery maxWidth={950} >
      <div className='box-registration'>
          <div className='msg-box-register'>
              <div>Welcome To<span className='app-logo-login'> I-Shopping</span></div>
              <div>No Account ? <Link style={{'textDecoration':'none'}} to={'/register'}> <span className='sign-up-btn'> Sign Up</span></Link></div>
          </div>
          <div className='signIn-text'> <h2>Sign in</h2></div>
          <div className='accounts-sign-in'>
            <div className='google-div'> <img src={google}/> Sign In With Google</div>
            <div className='facebook-div'> <img src={facebook}/></div>
            <div className='linkedin-div'><img src={linkedin}/></div>
          </div>
          <div className='user-inputs'>
          <div className='username'>
                <div>Enter username or Email</div>
                <div><input/></div>
              </div>
              <div className='password'>
                <div>Enter your password</div>
                <div><input type={'password'}/></div>
              </div>
              <div className='forget-password'><a> Forget Password</a></div>
            </div>
            {loginMsgError}
            <div  ><Button className='btn-sign-in' variant='contained'>Sign in</Button></div>
          
           </div>
      </MediaQuery>
    </>
   
  )
  )
 }
 
}

export default Login