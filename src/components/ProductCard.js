import React from 'react'
import { NavLink } from 'react-router-dom'
import TempImg from '../assets/images/Placeholders/hmgoepprod.jfif'


const  ProductCard = ({item}) => {
    return (
   <div className="col">
   <div className="card">
     <div className="card-img">
     <img src={item.img} alt="item.name" />
     <div className="card-menu">
         <button className="menu-link"><i className="fa-solid fa-heart"></i></button >
         <button className="menu-link"><i className="fa-solid fa-code-compare"></i></button >
         <button className="menu-link"><i className="fa-solid fa-bag-shopping"></i></button >
     </div>
     <NavLink to="/products" className="btn-theme btn-card-theme">
         <span className="corner-left"></span>            
         <span className="corner-right"></span>
          QUICK VIEW
     </NavLink>
     </div>
     <div className="card-body">
         <p className="card-category">{item.category}</p>
       <h5 className="card-title">{item.name}</h5>
       <p className="card-rating">
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
       </p>
       <p className="card-price">{item.price}</p>

     </div>
   </div>
 </div>
 )
}
export default ProductCard
