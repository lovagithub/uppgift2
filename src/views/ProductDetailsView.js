import React from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'



const ProductDetailsView = () => {
    const params = useParams()
    return (
        <>
         <MainMenuSection />
         <div className="container mt-5"></div>
         <h1>{params.name}</h1>
        <FooterSection /> 
        </>
    )
    
}
export default ProductDetailsView