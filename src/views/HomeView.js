import React from "react"
import ProductTitle from "../components/ProductTitle"
import FooterSection from "../sections/FooterSection"
import MainMenuSection from "../sections/MainMenuSection"
import ShowCaseSection from "../sections/ShowCaseSection"

const HomeView = ({items = []}) => {

    return (
        <>
        <header>
        <MainMenuSection />
       <ShowCaseSection />
       </header>
       <ProductTitle title="Featured Products" items={items} />
       
        <FooterSection />
      
        
        </>
    )
}
export default HomeView