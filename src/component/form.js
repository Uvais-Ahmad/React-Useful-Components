import React, { useEffect, useState } from 'react'
import useFormInput from '../hooks/formHook';
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';


export default function Form() {
    const firstNameProps = useFormInput('');
    const lastNameProps = useFormInput('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'Users'), {
            firstName: firstNameProps.value,
            lastName: lastNameProps.value,
            displayName: `${firstNameProps.value} ${lastNameProps.value}`
            
        });

        console.log('Document written with ID: ', docRef.id);
    }

    const getUsers = async () => {
        const users = await getDocs(collection(db, 'Users'));
        console.log("users found: ", users);
        users.forEach(doc => {
            console.log("Data ",doc.id, '=>', doc.data());
        });
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" {...firstNameProps} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" {...lastNameProps}  />
                </div>
                <div>
                    <p>Hi {firstNameProps?.value} {lastNameProps?.value}</p>
                </div>
                <button type='submit'>Save</button>
            </form>
        </>
    )
}
