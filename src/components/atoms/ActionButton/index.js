import React from 'react'
import './styles.scss';

const ActionButton = ({legend, handleClick, className, type='button'}) => {

return <input type={type} className={"action-button "+className} value={legend} onClick={handleClick} />
}

export default ActionButton;