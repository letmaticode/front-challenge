import React from 'react'
import './styles.scss';
import { Link } from 'react-router-dom';

const CancelButton = ({ url }) => {

    return <Link to={url} className="cancel-button" >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8L8 24M8 8L24 24" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" />
        </svg>
    </Link>
}

export default CancelButton;