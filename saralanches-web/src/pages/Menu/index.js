import React from "react";
import Logo from "../../assets/images/logo-pure.png";
import BackButton from "../../components/Back";
import FoodMenu from '../../components/FoodMenu';
import './styles.css';

function Menu() {
    return (
        <div id="page-food-menu">
            <nav className="page-food-menu-top">
                <div className="back-button">
                    <BackButton />
                </div>
                <img src={Logo} width="90px" height="90px" />
            </nav>
            <main className="food-menu-container">
                <h1>Cardápio</h1>
                <FoodMenu />
            </main>
        </div>
    );
}

export default Menu;