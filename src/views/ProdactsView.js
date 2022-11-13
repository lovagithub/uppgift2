import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductTiles from '../sections/ProductTiles'

const ProdactsView = () => {
    return (
        <>
         <MainMenuSection />
        <BreadcrumbSection currentPage="Products" />
         <ProductTiles title="Products" />
        <FooterSection /> 
        </>
        
    )
}
export default ProdactsView
