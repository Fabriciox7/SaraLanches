import React from "react";
import LogoWhite from "../../assets/images/logo-white.png";
import BackButton from "../../components/Back";
import DevMenu from '../../components/DevMenu';
import './styles.css';

function Home() {
    return (
        <div id="page-about">
            <main id="page-about-content" className="container">
                <header className="presentation">
                    <div className="back-button"><BackButton /></div>
                    <div className="background-image"></div>

                    <img src={LogoWhite} width="282" height="282" className="logo" />
                    <p>Sara Lanches é um restaurante fictício criado em 2020 para um projeto  de Engenharia de Software do curso de Engenharia de Computação da UFC. Se gostou do que viu sinta-se a vontade para entrar em contato com os desenvolvedores.</p>

                    <a href="https://github.com/Fabriciox7/SaraLanches" className="link">Ver no GitHub</a>
                </header>
                <div className="page-about-dev-menu">
                    <div className="page-about-dev-menu-separator"></div>
                    <h1>Desenvolvedores</h1>
                    <DevMenu />
                </div>
            </main>
        </div >
    );
}

export default Home;