import React, { useState } from 'react'
import useFormInput from '../hooks/formHook';

export default function Form() {
    const firstNameProps = useFormInput('');
    const lastNameProps = useFormInput('');

    // const handleFirstNameChange = (e) => {
    //     setFirstName(e.target.value);
    // }

    // const handleLastNameChange = (e) => {
    //     setLastName(e.target.value);
    // }

    return (
        <>
            <h1>Form</h1>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" {...firstNameProps} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" {...lastNameProps}  />
                </div>
                <div>
                    <p>First Name: {firstNameProps?.value}</p>
                    <p>Last Name: {lastNameProps?.value}</p>
                </div>
            </form>
        </>
    )
}
