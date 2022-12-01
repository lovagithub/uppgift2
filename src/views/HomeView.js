import React, { useContext } from "react"
import { ProductContext } from "../contexts/Context"
import FooterSection from "../sections/FooterSection"
import MainMenuSection from "../sections/MainMenuSection"
import ShowCaseSection from "../sections/ShowCaseSection"
import ProductTiles from "../sections/ProductTiles"



const HomeView = () => {
    const productContext = useContext(ProductContext)
    return (
        <>
        <header>
        <MainMenuSection />
       <ShowCaseSection />
       </header>
       <ProductTiles title="Featured Products" items={productContext.featuredProducts}/>
       
        <FooterSection />
      
        
        </>
    )
}
export default HomeView