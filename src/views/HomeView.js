import React, { useContext } from "react"
import { ProductContext } from "../contexts/Context"
import FooterSection from "../sections/FooterSection"
import MainMenuSection from "../sections/MainMenuSection"
import ShowCaseSection from "../sections/ShowCaseSection"
import ProductTiles from "../sections/ProductTiles"
// import ProductGridSection from "../sections/ProductGridSection"

//<ProductGridSection title="Featured Products" products={featuredproducts} />
//      <ProductGridSection title="Top Products" products={topProducts} />
       

const HomeView = () => {
    const productContext = useContext(ProductContext)
    return (
        <>
        <header>
        <MainMenuSection />
        <ShowCaseSection />
       </header>
       <ProductTiles title="Featured Product/tiles" items={productContext.featuredProducts}/>
      
        <FooterSection />
      
        
        </>
    )
}
export default HomeView