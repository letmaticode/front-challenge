import React from 'react';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

import './styles.scss';

const InputText = ({ label, type, as, placeholder, rows = 1, handleChange, id, error = [], showPass, setshowPass }) => {

    return <span>
        <div className="input-text-container">
            <Form.Group controlId={id}>
                <Form.Label>{label}</Form.Label>
                <div className='input-text-control-container'>
                    <Form.Control className={id === 'password' && 'password'} type={type} as={as} placeholder={placeholder} onChange={handleChange} rows={rows} />
                    {id === "password" &&
                        <FontAwesomeIcon className={showPass ? 'input-text-icon active' : 'input-text-icon'}
                            icon={faEye} onClick={() => setshowPass(!showPass)} />
                    }
                </div>
            </Form.Group>
        </div>
        <div className="input-error">
            {error.map(item => {
                return <p>{item}</p>;
            })}
        </div>
    </span>
}

export default InputText;