import { Button } from '@mui/material'
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import './css/card.css'
import { setProducts } from '../Redux/Actions/prodcutActions'
import { Link } from 'react-router-dom'
import { setCartProduct ,incrementProduct} from '../Redux/Actions/prodcutActions' 
import Nav from './Nav'
import Footer from './Footer'
const Cards = () => {
  const addToCart=async(item:any)=>{
    const res :any=await axios.get(`https://fakestoreapi.com/products/${parseInt(item.id)}`).catch((err)=>{console.log('err',err)})
      dispatch(incrementProduct(res.data))
  }
 
  const dispatch=useDispatch()
  const fetchDataApi=async()=>{
    const response:any=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log('api error',err)
    })
    dispatch(setProducts(response.data))
  }
  useEffect(()=>{
    fetchDataApi()
   
  },[])
  
  
  const products:any =useSelector((state :any)=>state.all_products.products)

console.log(products,'main')


  return (
    <>
    <Nav/>
    <div className='cards-main'>
   
  { (products ==undefined)?"Loading ": (
   products.map((item:any)=>{
     return (
        <div className='card' key={item.id}>
          <Link className='link-add-to-cart' to={`/product/${parseInt(item.id)}`}> 
        <div className='card-title'> {item.title}</div>
        <img className='card-img' src={item.image}/>
        <div className='card-price'>Price  :  ${item.price}</div> </Link>
       <Button variant='contained' onClick={()=>{addToCart(item)}} > Add To Cart</Button>
       </div>
  )
})
  )
 }
  </div>
  <Footer/>
  </>
  )
 
}

export default Cards