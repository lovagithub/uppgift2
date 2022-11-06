import React from 'react'
import { NavLink } from 'react-router-dom'

const  ProductCard = () => {
    return (
   <div className="col">
   <div className="card">
     <div className="card-img">
     <img src="assets/images/card-img" alt="" />
     <div className="card-menu">
         <NavLink className="menu-link"><i className="fa-solid fa-heart"></i></NavLink>
         <NavLink className="menu-link"><i className="fa-solid fa-repeat"></i></NavLink>
         <NavLink className="menu-link"><i className="fa-solid fa-bag-shopping"></i></NavLink>
     </div>
     <NavLink className="btn-theme btn-card-theme" href="#">
         <span className="corner-left"></span>            
         <span className="corner-right"></span>
          QUICK VIEW
     </NavLink>
     </div>
     <div className="card-body">
         <p className="card-category">Category</p>
       <h5 className="card-title">Modern Black Blouse</h5>
       <p className="card-rating">
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
       </p>
       <p className="card-price">$35.00</p>

     </div>
   </div>
 </div>
 )
}
export default ProductCard
