import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

const Input = ({lable, name, ...rest}) => {
    return (
        <div className="form-control">
            <lable htmtFor={name}> {lable} </lable>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError}  />
        </div>
    )
}

export default Input
