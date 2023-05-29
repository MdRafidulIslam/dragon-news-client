import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL)


    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value)
    }
    const handleChange = (event) => {
        setName(event.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control defaultValue={user?.displayName} onChange={handleChange} name='name' type="text" placeholder="Your Name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} name='photoURL' type="text" placeholder="Photo URL" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    );
};

export default Profile;