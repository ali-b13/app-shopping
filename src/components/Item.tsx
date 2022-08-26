import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router'
import { Button } from '@mui/material'
import axios from 'axios'
import { getItem ,DeleteItem,get_Category_product} from '../Redux/Actions/prodcutActions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './css/singleItem.css'
import Nav from './Nav'
const Item = () => {
  const dispatch=useDispatch()
  const product = useSelector((state:any)=>state.product.product)
 
   
  const  parameter:any=useParams()
  const itemData=async()=>{
   let response :any=await axios.get(`https://fakestoreapi.com/products/${parseInt(parameter.id)}`).catch((err)=>{console.log('err',err)})
   dispatch(getItem(response.data))
  }
  useEffect(()=>{

    if(parameter.id && parameter.id != '') {itemData()}
   
    return ()=>{
      dispatch(DeleteItem())
    }
  },[parameter.id])

  return (
    <>
    <Nav/>
    <div className='main-item'>

      { (product == undefined)?"Loading":(
             <div className='s-item' key={product.id}>

                 <img className='s-item-img' src={product.image}/>
                 <div className='s-item-details'>
                       <div className='s-item-title'> {product.title}</div>
                       <div className='s-item-description'>{product.description}</div>
                       <div className='s-item-price'>Price  :  ${product.price}</div>
                      <div className='s-rating'> 
                      <div className='s-rate'>Rating {product.rating.rate}  </div>
                      <div className='s-count-rate'>Rating count [{product.rating.count}]  </div>
                      <Button className='s-btn-buy' variant='contained' > Buy</Button>
                      </div>
                       
                       
                </div>
              
               
           </div>
      )
         
      }


      <div className='product-may-know'>
  {/* {
     (relatedProducts ==undefined)?'loading':(
       relatedProducts.map((product:any)=>{
        return (
          <div> {product.image} </div>
        )
       })
     )
  } */}
      </div>
    </div>
    </>
)
}

export default Item