import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='mb-4' variant='outline-dark'> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find on us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twich </ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>

                </ListGroup>

            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;