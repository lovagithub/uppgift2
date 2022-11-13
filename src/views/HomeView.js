import React from "react"
import ProductTile from "../components/ProductTile"
import FooterSection from "../sections/FooterSection"
import MainMenuSection from "../sections/MainMenuSection"
import ShowCaseSection from "../sections/ShowCaseSection"

const HomeView = () => {

    return (
        <>
        <header>
        <MainMenuSection />
       <ShowCaseSection />
       </header>
       <ProductTile title="Featured Products" />
       
        <FooterSection />
      
        
        </>
    )
}
export default HomeView