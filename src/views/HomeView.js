import React, { useContext } from "react"
import FooterSection from "../sections/FooterSection"
import MainMenuSection from "../sections/MainMenuSection"
import ShowCaseSection from "../sections/ShowCaseSection"
import ProductTiles from "../sections/ProductTiles"
import { ProductContext } from "../context/contexts"


const HomeView = () => {
    const ProductContext = useContext(ProductContext)
    return (
        <>
        <header>
        <MainMenuSection />
       <ShowCaseSection />
       </header>
       <ProductTiles title="Featured Products" items={ProductContext.featuredProducts}/>
       
        <FooterSection />
      
        
        </>
    )
}
export default HomeView