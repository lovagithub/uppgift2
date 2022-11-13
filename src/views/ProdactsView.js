import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductTitle from '../components/ProductTitle'

const ProdactsView = ({items = []}) => {
    return (
        <>
         <MainMenuSection />
        <BreadcrumbSection currentPage="Products" />
         <ProductTitle title="Products" items={items} />
        <FooterSection /> 
        </>
        
    )
}
export default ProdactsView
