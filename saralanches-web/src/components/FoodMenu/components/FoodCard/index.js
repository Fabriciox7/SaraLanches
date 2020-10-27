import React from 'react';
import './style.css';

function FoodCard(props) {
    function generatePurchaseLink(message = '', phone = '5588981029937') {
        const server = 'https://api.whatsapp.com/';
        message = encodeURI(message);
        return server + 'send?phone=' + phone + '&text=' + message;
    }

    const { id, name, link_picture, price, description } = props;
    const purchase_link = generatePurchaseLink('Vou querer ' + name);

    return (
        <div className="food-card" id={id}>
            <img className="food-picture" src={link_picture} width="115px" />
            <div className="food-info">
                <h2 className="food-name">{name}</h2>
                <p className="food-price">R$ {price}</p>
                <p className="food-description">{description}</p>
            </div>
            <a className="food-buy-buttom" href={purchase_link}><span>Pedir Esse</span></a>
        </div>
    );
}

export default FoodCard;