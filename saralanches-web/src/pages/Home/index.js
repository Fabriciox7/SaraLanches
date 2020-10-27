import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../assets/images/logo-white.png";
import BackgroundHome from "../../assets/images/home-background.jpg";
import FoodMenu from '../../components/FoodMenu';
import './styles.css';

function Home() {
    return (
        <div id="page-home">
            <main id="page-home-content" className="container">
                <header className="presentation">

                    <div className="background-image"></div>

                    <img src={LogoWhite} width="391" height="391" className="logo" />
                    <p>Olá! Com vontade de saborear nossos deliciosos pratos?</p>

                    <Link to="/cardapio" className="cta-buttom">Ver Cardápio</Link>
                    <Link to="/sobre" className="link">Sobre Nós</Link>
                </header>
                <div className="page-home-food-menu">
                    <div className="page-home-food-menu-separator"></div>
                    <h1>Os mais pedidos</h1>
                    <FoodMenu limit="3"/>
                </div>
            </main>
        </div >
    );
}

export default Home;