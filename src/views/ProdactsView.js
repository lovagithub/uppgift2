import React, { useContext } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductTiles from '../sections/ProductTiles'
import { ProductContext } from '../contexts/Context'

const ProdactsView = () => {
    const productContext = useContext(ProductContext)
    return (
        <>
         <MainMenuSection />
        <BreadcrumbSection currentPage="Products" />
         <ProductTiles title="Products" items={productContext.all} />
        <FooterSection /> 
        </>
        
    )
}
export default ProdactsView
