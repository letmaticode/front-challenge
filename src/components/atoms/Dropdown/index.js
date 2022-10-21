
import React from 'react'
import './styles.scss';

import DropdownBootstrap from 'react-bootstrap/Dropdown'

const Dropdown = ({ username }) => {
    return <DropdownBootstrap>
        <DropdownBootstrap.Toggle variant="success" id="dropdown-basic">
            Explorar
        </DropdownBootstrap.Toggle>

        <DropdownBootstrap.Menu>
            <DropdownBootstrap.Item href="#/action-1">Explorar 1</DropdownBootstrap.Item>
            <DropdownBootstrap.Item href="#/action-2">Explorar 2</DropdownBootstrap.Item>
            <DropdownBootstrap.Item href="#/action-3">Explorar 3</DropdownBootstrap.Item>
        </DropdownBootstrap.Menu>
    </DropdownBootstrap>
}

export default Dropdown;