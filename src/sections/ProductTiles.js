import React, { useContext } from 'react'
import ProductTile from '../components/ProductTile'
import { ProductContext } from '../context/contexts'


const ProductTiles= ({title, items = []}) => {
   
    console.log("ProductTiles runnig")
    return ( 
        
        <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {
         product.featuredProducts.map( product => <ProductTile key={product.articleNumber} items={product} />)
            
    }
         
        </div>
    </div>
          
    </section>

    )
}

export default ProductTiles
