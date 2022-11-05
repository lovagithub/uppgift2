import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
    return (
        <nav className="mainmenu container">     
            <div className="logo">
                Fixxo.
            </div>
                <div className="menu-links">  
                <NavLink className="menu-link" to="/" end>Home</NavLink> 
                <NavLink className="menu-link" to="/categories" end>Categories</NavLink>   
                <NavLink className="menu-link" to="/products" end>Products</NavLink>   
                <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>   
                </div>
      
            <div className="menu-icons">
                <MenuIcon link="/search" icon="fa-solid fa-magnifying-glass" />
                <MenuIcon link="/compare" icon="fa-solid fa-repeat" />
                <MenuIcon link="/wishlist" icon="fa-solid fa-heart" />
                <MenuIcon link="/shoppingcart" icon="fa-solid fa-bag-shopping" />
         </div>          
    </nav>
    )
}

export default MainMenuSection