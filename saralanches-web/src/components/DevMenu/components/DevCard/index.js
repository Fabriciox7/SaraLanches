import React from 'react';
import './style.css';

function DevCard(props) {
    function generateGithubLink(user = '') {
        return 'https://github.com/' + user;
    }

    const { github_user, name, link_picture, title } = props;
    const githubLink = generateGithubLink(github_user);

    return (
        <div className="dev-card" id={github_user}>
            <img className="dev-picture" src={link_picture} width="115px" />
            <div className="dev-info">
                <h2 className="dev-name">{name}</h2>
                <p className="dev-title">{title}</p>
                <a className="dev-github" href={githubLink}><span>GitHub</span></a>
            </div>
        </div>
    );
}

export default DevCard;