import React, { useEffect, useState } from 'react'
import { createContact, getContact, updateContact } from '../services/ContactService'
import { useNavigate, useParams } from 'react-router-dom'
const Contact = () => {

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const { id } = useParams();

    const [errors, serErrors] = useState({
        name: '',
        email: '',
        phone: ''

    })

    function handleName(e) {
        setName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePhone(e) {
        setPhone(e.target.value)
    }

    const navigator = useNavigate();

    useEffect(() => {

        if (id) {
            getContact(id).then((response) => {
                setName(response.data.name)
                setEmail(response.data.email)
                setPhone(response.data.phone)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    function saveOrUpdateContact(e) {
        e.preventDefault();

        if (validateForm()) {
            const contact = { name, email, phone }
            console.log(contact);

            if (id) {
                updateContact(id, contact).then((response) => {
                    console.log(response.data);
                    navigator('/contact')
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createContact(contact).then((response) => {
                    console.log(response.data);
                    navigator('/contact')
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    function validateForm() {
        let isValid = true;
        const errorsCopy = { ...errors }

        if (name.trim()) {
            errorsCopy.name = ''
        } else {
            errorsCopy.name = 'Name is required!';
            isValid = false;
        }

        if (email.trim()) {
            errorsCopy.email = ''
        } else {
            errorsCopy.email = 'Email is required!';
            isValid = false;
        }

        if (phone.trim()) {
            errorsCopy.phone = ''
        } else {
            errorsCopy.phone = 'Phone is required!';
            isValid = false;
        }

        serErrors(errorsCopy);
        return isValid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Contact</h2>
        } else {
            return <h2 className='text-center'>Add Contact</h2>
        }
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form >
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter name'
                                    name='name'
                                    value={name}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    onChange={handleName}
                                ></input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='email'
                                    placeholder='Enter email'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={handleEmail}
                                ></input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone:</label>
                                <input
                                    type='tel'
                                    placeholder='Enter phone'
                                    name='phone'
                                    value={phone}
                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                    onChange={handlePhone}
                                ></input>
                                {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateContact}>Submit</button>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact