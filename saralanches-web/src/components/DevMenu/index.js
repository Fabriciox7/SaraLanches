import React from 'react';
import DevCard from './components/DevCard';
import Data from './data.json';
import './style.css';

function DevMenu() {
    const { devs } = Data;
    return (
        <div id="food-menu">
            {devs.map(dev => {
                return (
                    <DevCard
                        github_user={dev.github_user}
                        name={dev.name}
                        link_picture={dev.link_picture}
                        title={dev.title}
                    />
                );
            })}
        </div>
    );
}

export default DevMenu;