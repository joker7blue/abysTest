import React from 'react'
import './formInput.scss'

const FormInput = ({ handleChange, label, ...othersProps }) => (

    <div className="form-group">
        <input onChange={handleChange} {...othersProps} />
        {
            label.length > 0 ? (<label className={`form-input-label ${othersProps.value.length > 0 ? 'shrink' : ''}`}>{label}</label>) : null
        }
    </div>
)

export default FormInput