import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle , FaGithub, FaFacebook, FaTwitter,FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosal from '../BrandCarosal/BrandCarosal';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <ButtonGroup vertical>
                 <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login With Google</      Button>{' '}
                 <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>{' '}
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 border border-1 shadow-sm'><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border border-1 shadow-sm'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border border-1 shadow-sm'><FaWhatsapp></FaWhatsapp> Whats App</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border border-1 shadow-sm'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border border-1 shadow-sm'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosal></BrandCarosal>
            </div>
        </div>
    );
};

export default RightSideNav;