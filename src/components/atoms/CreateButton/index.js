import React from 'react'
import './styles.scss';
import { Link } from 'react-router-dom';

const CreateButton = ({url}) => {

    return <Link to={url} className="create-button" ><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
            <g filter="url(#filter1_d)">
                <rect x="4" width="56" height="56" rx="28" fill="#3843D0" />
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6423 19.4349C41.0328 19.0444 41.0328 18.4112 40.6423 18.0207C40.2517 17.6301 39.6186 17.6301 39.2281 18.0207L39.0513 18.1975L38.8745 18.0207C38.1173 17.2635 36.9548 17.1588 36.0855 17.7065L34.9854 16.6065C34.7901 16.4112 34.4735 16.4112 34.2783 16.6065L28.975 21.9098C28.7797 22.105 28.7797 22.4216 28.975 22.6169C29.1702 22.8121 29.4868 22.8121 29.6821 22.6169L34.6318 17.6671L35.3389 18.3742L21.818 31.8952C21.5039 32.2093 21.2898 32.6093 21.2027 33.0449L20.4666 36.7255C20.2916 37.6001 21.0628 38.3713 21.9374 38.1964L25.618 37.4602C26.0536 37.3731 26.4536 37.159 26.7677 36.8449L40.6423 22.9704C41.5209 22.0917 41.5209 20.6671 40.6423 19.7884L40.4655 19.6117L40.6423 19.4349ZM37.1067 19.4349C37.2043 19.3373 37.3626 19.3373 37.4603 19.4349L39.228 21.2026C39.3257 21.3003 39.3257 21.4586 39.228 21.5562L37.2835 23.5007L35.1622 21.3794L37.1067 19.4349ZM33.748 22.7936L35.8693 24.9149L25.3535 35.4307C25.3186 35.4656 25.2742 35.4894 25.2258 35.4991L22.6483 36.0146L23.1638 33.4371C23.1735 33.3887 23.1973 33.3443 23.2322 33.3094L33.748 22.7936Z" fill="white" />
            <path d="M28 38H40" stroke="white" strokeLinecap="round" />
        </g>
        <defs>
            <filter id="filter0_d" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0541667 0 0 0 0 0.0698465 0 0 0 0 0.270833 0 0 0 0.32 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter id="filter1_d" x="4" y="0" width="56" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.168627 0 0 0 0 0.501961 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
        </defs>
    </svg>
</Link>
}

export default CreateButton;