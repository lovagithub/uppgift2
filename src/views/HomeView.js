import React, { useState } from "react"
import ProductCard from "../components/ProductCard"
import FooterSection from "../sections/FooterSection"
import MainMenuSection from "../sections/MainMenuSection"
import ProductGridSection from "../sections/ProductGridSection"
import ShowCaseSection from "../sections/ShowCaseSection"

const HomeView = ({items = []}) => {

    return (
        <>
        <header>
        <MainMenuSection />
       <ShowCaseSection />
       
       <ProductGridSection title="Featured Products" items={items} />
        </header>
        <FooterSection />
      
        
        </>
    )
}
export default HomeView