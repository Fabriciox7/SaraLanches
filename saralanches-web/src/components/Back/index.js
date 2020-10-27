import React from 'react';
import { Link } from 'react-router-dom'

function Back() {
    return (
        <Link to="/">
            <svg className="back-icon" width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                    <path d="M4.58579 13.5858C3.80474 14.3668 3.80474 15.6332 4.58579 16.4142L17.3137 29.1421C18.0948 29.9232 19.3611 29.9232 20.1421 29.1421C20.9232 28.3611 20.9232 27.0948 20.1421 26.3137L8.82843 15L20.1421 3.68629C20.9232 2.90524 20.9232 1.63891 20.1421 0.857865C19.3611 0.0768166 18.0948 0.0768167 17.3137 0.857866L4.58579 13.5858ZM31 13L6 13L6 17L31 17L31 13Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d" x="0" y="0.272064" width="35" height="37.4558" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                </defs>
            </svg>
        </Link>
    );
}

export default Back;