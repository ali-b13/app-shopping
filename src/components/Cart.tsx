import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import './css/cart.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {IconButton} from '@mui/material'
import { useSelector } from 'react-redux'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add_one, incrementProduct, remove_one, } from '../Redux/Actions/prodcutActions';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
const Cart = () => {
   const navigate= useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('username')==null || undefined){
      navigate('/')
    }
  },[])

  const cartProductAdded=useSelector((state:any)=>state.cartNew.cart)
  const quantity=useSelector((state:any)=>state.cartNew.cart)
  const dispatch=useDispatch()
    const remove=(item:any)=>{
      dispatch(remove_one(item))
    }
    const add =(item:any)=>{
         dispatch(add_one(item))
    }
    useEffect(()=>{

    },[quantity])

   const EmptyCart=()=>{
    return (
     <div >
    <Nav/>
     <h1 className='empty-cart-header'> Your Shopping List is Empty </h1>
     <div className=' empty-container'>
     <div className='message-to-add'> Start Adding Some !! </div>
     <div className='emoji-cart'>&#128516;</div>
     </div>
     <div className='space-bottom'></div>
     <Link className='link-router' to={'/'}><div className='back-shopping-btn'> <IconButton > <ArrowBackIcon>  </ArrowBackIcon> Continue Shopping</IconButton>  </div></Link> 
     </div>
     
      
    )
  }
   const ReadyCart =()=>{
   
    let total = cartProductAdded.map((item:any)=>{ return (item.price* item.qty) })
    let calculateTotal =total.reduce((x:any,y:any)=>{return x+y})
    return (
      <>
      <Nav/>
      <div className='cart-section'>
      <Link className='link' to={'/products'}> <Button className='going-back'>  <ArrowBackIcon/> <h3>Go Back</h3></Button> </Link>
      <h3>Shopping Cart </h3>
        <div className='cart-container'> 
      
  

    <header className='header-for-elements'> <div className='emptyForImage'></div>  <div className='emptyForTitle'>Title</div>    <div>Price</div>   <div className='emptyForQty'>Quantity</div>     <div>SubTotal</div></header>
        {
            (cartProductAdded ==undefined)? "loading": (
            
             cartProductAdded.map((item:any)=>{
              
              
              return(
                <>
                <div className='flex-item' key={item.id}>
            
                       <div className='img-container'><img className='cart-item-img' src={item.image}/></div>
                       
                          <div className='content-cart'> 
                            
                             <div className='cart-item-title'> {item.title}</div>
                             <div className='cart-item-price'>{item.price}$</div>
                             <div className='cart-item-qty'><IconButton  onClick={()=>{remove(item)}}><RemoveIcon /></IconButton><span >{item.qty}</span><IconButton onClick={()=>{add(item)}}><AddIcon/></IconButton></div>
                             <div className='cart-item-subtotal'>{item.price * item.qty}$</div>
                           
                            </div>
                        
            
               </div>
                </>
              )
              }
              
              
             )
            )
          }
          
         
      </div>
      <div className='total-amount'><span >Total :</span> <span> {(calculateTotal ==undefined)?'loading': ( calculateTotal +'$')}  </span></div>
      <div className='final-purchase'><Button className='btn-buy' variant='contained'>Check Out </Button></div>
      </div>
      </>
    )
  }


 return (
  
    (cartProductAdded ==undefined || cartProductAdded.length== 0  ) ?( <EmptyCart/>) : (<ReadyCart/>)
  
 )
}





export default Cart



   
{/* <div className='content-cart'> 
                            
<div className='headers-container'> <div>Title</div> <div className='cart-item-title'> {item.title}</div></div>
 <div className='headers-container'><div>Price</div>  <div className='cart-item-price'>{item.price}</div></div>
 <div className='headers-container'><div className='qty'>Quantity</div>  <div className='cart-item-qty'><IconButton  onClick={()=>{remove(item)}}><RemoveIcon /></IconButton><span >{item.qty}</span><IconButton onClick={()=>{add(item)}}><AddIcon/></IconButton></div></div>
 <div className='headers-container'><div>SubTotal</div>    <div className='cart-item-subtotal'>{item.price * item.qty}</div></div>

 </div> */}