import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const  ProductGridSection = ({title}) => {

    const [products, setProduct] = useState([
        { id: 1, productName: "Modern Blacke Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "card-img.jpg"},
        { id: 2, productName: "Modern Blacke Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "card-img.jpg"},
        { id: 3, productName: "Modern Blacke Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "card-img.jpg"},
        { id: 4, productName: "Modern Blacke Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "card-img.jpg"}

    ])

    return (
        
        
        <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
         {
         products.map(product => <ProductCard />)
            
    }
        </div>
    </div>
          
    </section>

    )
}
export default ProductGridSection
