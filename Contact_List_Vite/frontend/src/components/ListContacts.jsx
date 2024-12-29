import React, { useEffect, useState } from 'react';
import { deleteContact, listContacts } from '../services/ContactService';
import { useNavigate } from 'react-router-dom';

const ListContacts = () => {

    const [contacts, setContacts] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getAllContacts();
    }, [])

    function getAllContacts() {
        listContacts().then((response) => {
            setContacts(response.data);
        }).catch((error => {
            console.error(error)
        }))
    }

    function addNewContact() {
        navigate('/add-contact')
    }

    function updateContact(id) {
        navigate(`/edit-contact/${id}`)
    }

    function removeContact(id) {
        console.log(id);

        deleteContact(id).then((response) => {
            getAllContacts();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">Contacts List</h2>

            <button className='btn btn-primary mb-2' onClick={addNewContact}>Add Contact</button>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Contact Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateContact(contact.id)}>Update</button>

                                <button className='btn btn-danger' onClick={() => removeContact(contact.id)} style={{ marginLeft: '10px' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListContacts;