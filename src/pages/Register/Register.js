import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { createUser, verifyEmail, updatedUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
                handleUpdatedUser(name, photoURL)
                handleEmailVerification()
                toast.success('please verify your email address')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    const handleCheck = event => {
        setAccepted(event.target.checked)
    }
    const handleUpdatedUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updatedUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo URL" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleCheck}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms and condition</Link> </>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-muted">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;