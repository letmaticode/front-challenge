import React from 'react'
import Checkbox from 'react-bootstrap/FormCheck';

import './styles.scss';

const InputCheckbox = ({legend, handleChange, error}) => {

return <span>
        <div className="input-checkbox">
            <Checkbox type="checkbox" label={legend} onChange={handleChange}/>
        </div>
        <div className="input-error">
            {error}
        </div>
    </span>
}

export default InputCheckbox;