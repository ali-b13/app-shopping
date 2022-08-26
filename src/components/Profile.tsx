import React from 'react'
import { useEffect,useState } from 'react'
import Nav from './Nav'
import './css/profile.css'
import shoppingOrder from 'assessts/shopping-order.svg'
import profileIllustrator from 'assessts/profile.svg'
import bank from 'assessts/bank-credit.svg'
import discount from 'assessts/discount.svg'
import wallet from 'assessts/wallet.svg'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
const Profile = () => {
  const [name,setName]=useState <any>( '')
  const [email,setEmail]=useState <any>( '')
  const [photo,setPhoto]=useState <any>( '')
  const navigate =useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('username')==null || undefined){
      navigate('/')
    }else {
    setName(localStorage.getItem('username'))
    setEmail(localStorage.getItem('userEmail'))
    setPhoto(localStorage.getItem('userImage'))
    }
  },[])
  
  
  const logOut =()=>{
     localStorage.removeItem('username')
     localStorage.removeItem('userEmail')
     localStorage.removeItem('userImage')
    navigate('/')
  }
  return (
    <div>
      <Nav/>
      <div className='profile-container'>
      <div className='related-account'>
          <div className='img-and-email'>
          <h2 className='header-profile'>Hi  {','+name}</h2>
           <div className='user-img'><img src={photo}/></div>
           <div>{email}</div>
         </div>
         <div className='services-profile'>
          <Button className="order-profile" color='primary' variant='contained'> <div>Your Orders</div> <img className='img-services' src={shoppingOrder}/> </Button>
          <Button className="order-profile"  color='primary' variant='contained'> <div>Your Wallet</div> <img className='img-services' src={wallet}/> </Button>
          <Button className="order-profile"  color='primary' variant='contained'> <div>Get Offers</div> <img className='img-services' src={discount}/> </Button>
          <Button className="order-profile"  color='primary' variant='contained'> <div>Payments</div> <img className='img-services' src={bank}/> </Button>
          <div className='btn-log-out'> <Button className='btn-error' color='error' variant='contained' onClick={logOut}>Log out</Button> </div>
         </div>
      </div>
      <div className='second-half-profile'>
      
         <img src={profileIllustrator}/></div>
      </div>
    </div>
  )
}

export default Profile