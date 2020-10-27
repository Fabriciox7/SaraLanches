import React, { useEffect, useState } from 'react';
import FoodCard from './components/FoodCard';
import './style.css';

function FoodMenu(props) {
    const [foods, setFoods] = useState([]);
    
    useEffect(() => {
        fetch('https://backend-saralanches.herokuapp.com/foods')
            .then(res => res.json())
            .then(result => {
                setFoods(result.foods);
            });
    });

    const { limit } = props;
    return (
        <div id="food-menu">
            {foods.slice(0, limit).map(food => {
                return (
                    <FoodCard
                        id={food._id}
                        name={food.name}
                        link_picture={food.link_picture}
                        price={food.price}
                        description={food.description}
                    />
                );
            })}
        </div>
    );
}

export default FoodMenu;