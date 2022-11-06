import React from 'react'

const  ProductCard = () => {
    return (
   <div className="col">
   <div className="card">
     <div className="card-img">
     <img src="assets/images/Placeholders/hmgoepprod.jfif" alt="hmgoepprod" />
     <div className="card-menu">
         <a href="#"><i className="fa-solid fa-heart"></i></a>
         <a href="#"><i className="fa-solid fa-repeat"></i></a>
         <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
     </div>
     <a className="__btn-theme btn-card-theme" href="">
         <span className="__btn-theme-left"></span>            
         <span className="__btn-theme-right"></span>
          QUICK VIEW
     </a>

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
