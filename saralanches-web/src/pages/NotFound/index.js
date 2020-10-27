import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/images/404.jpg';
import './style.css';

function NotFound() {
    return (
        <div id="not-found-page">
            <img src={NotFoundImage} className="not-found-img" />
            <p>Ooops!<br/>Não encontramos a página que você está procurando.</p>
            <Link to="/" className="not-found-button">Voltar ao Começo</Link>
        </div>
    );
}

export default NotFound;