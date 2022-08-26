import React,{useState,useEffect} from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import './css/signUp.css'
import { Auth } from '../firebaseConnection/FireBaseUtils'
 import signUp from 'assessts/signup.svg'
 import google from 'assessts/google.svg'
 import facebook from 'assessts/facebook.svg'
 import linkedin from 'assessts/linkedin.svg'
import { signUpWithGoogle } from '../firebaseConnection/FireBaseUtils'
import { Button } from '@mui/material'
import MediaQuery from "react-responsive";
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import spinner from 'assessts/spinner.svg'
const SignUp = ():any => {
  const navigate=useNavigate()
  const [email,setEmail]=useState <any>('')
  const [password,setPassword]=useState('')
  const [confirmedPassword,setConfirmedPassword]=useState<string >('')
  const [emailMsg,setEmailMsg]=useState('')
  const [passwordMsg,setPasswordMsg]=useState('')
  const [spinnerMode,setSpinnerMode]=useState <any>(false)
  console.log(email,password,confirmedPassword)

  const [user,setUser]=useState<any>()
  let register:any=async () => {
     try {
      const user:any =createUserWithEmailAndPassword(Auth,email,password)
      console.log(user)
      setSpinnerMode(false)
      navigate('/')
     }
     catch(err){console.log(err)}
  }
  onAuthStateChanged(Auth,(currentUser:any)=>{
    setUser(currentUser)
  })
   function isValidEmail(email:any){
   const emailExpr:any= new RegExp (
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
    return emailExpr.test(email)
   }
  const validateUser:any=()=>{
    if(isValidEmail(email) && password ===confirmedPassword && password!=='' && password.length>5){
      setSpinnerMode(true)
      setTimeout(()=>{
        register()
      },2000)
    }
    if(isValidEmail(email) ==false){
      setEmailMsg('Invalid Email')
    }else {
      setEmailMsg('')
    }
    if (password !== confirmedPassword){
      setPasswordMsg('passwords Do not Match !')
    } else if (password.length <6){
      setPasswordMsg('password Should be More than 6 character !')
    }
   else if (password =='' || confirmedPassword==''){
      setPasswordMsg('Fields Can not Be Empty !')
    }else {
      setPasswordMsg('')
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
              <div><span className='app-logo-login'> I-Shopping</span></div>
              <div>Already Have An Account ? <Link style={{'textDecoration':'none'}} to={'/'}> <span className='sign-up-btn'> Sign In</span></Link></div>
          </div>
          <div className='signIn-text'> <h2>Sign Up</h2></div>
          <div className='accounts-sign-in'>
            <div className='google-div' onClick={signUpWithGoogle}> <img src={google}/> Sign Up With Google</div>
            <div className='facebook-div'> <img src={facebook}/></div>
            <div className='linkedin-div'><img src={linkedin}/></div>
          </div>
          <div className='user-inputs'>
          <div className='username'>
                <div>Enter username or Email</div>
                <div><input value={email} onChange={(event)=>{setEmail(event.target.value)}}/></div><span style={{'color':'red',"fontSize":'0.8rem'}}>{emailMsg}</span>
              </div>
              <div className='password'>
                <div>Enter your password</div>
                <div><input type={'password'} value={password} onChange={(event)=>{setPassword(event.target.value)}}/></div>
              </div>
              
               <div className='password'>
                <div>Confirm your password</div>
                <div><input type={'password'} value={confirmedPassword} onChange={(event)=>(setConfirmedPassword(event.target.value))}/></div> <span style={{'color':'red',"fontSize":'0.8rem'}}>{passwordMsg}</span>
              </div>
              <div className='forget-password'><Link to={'/'}><a> already Having An Account ?</a></Link></div>
            </div>
            <div  ><Button className='btn-sign-in' variant='contained' onClick={validateUser}>Sign Up</Button></div>
             {   (spinnerMode ==false)? '' : <img style={{'height':'2rem','margin':'1rem'}} src={spinner}/>}
           </div>
          <div className='first-half-section'>
            <div className='login-logo'>I-Shopping</div>
            <div className='login-content'>
              <div className='login-text'>
              <div className='text-login-first-child'>Sign Up </div> 
              for better experience and to  Be Always updated  
              </div>
              <div className='svg-illustrator'> <img src={signUp}/></div>
            </div>
          </div>

          <div className='second-half-section'> </div>
      </div>
      </MediaQuery>
      <MediaQuery maxWidth={950} >
      <div className='box-registration'>
          <div className='msg-box-register'>
              <div>Welcome To<span className='app-logo-login'> I-Shopping</span></div>
              <div>having An Account ? <span className='sign-up-btn'> Sign Up</span></div>
          </div>
          <div className='signIn-text'> <h2>Sign Up</h2></div>
          <div className='accounts-sign-in'>
            <div className='google-div'> <img src={google}/> Sign Up With Google</div>
            <div className='facebook-div'> <img src={facebook}/></div>
            <div className='linkedin-div'><img src={linkedin}/></div>
          </div>
          <div className='user-inputs'>
          <div className='username'>
                <div>Enter username or Email</div>
                <div><input /></div>
              </div>
              <div className='password'>
                <div>Enter your password</div>
                <div><input type={'password'} /></div>
              </div>
              
               <div className='password'>
                <div>Confirm your password</div>
                <div><input type={'password'} /></div>
              </div>


              <div className='forget-password'><a> Already Have An Account?</a></div>
            </div>
            <div  ><Button className='btn-sign-in' variant='contained'>Sign Up</Button></div>
          
           </div>
      </MediaQuery>
    </>
   
  )
  )
 }
 
}

export default SignUp