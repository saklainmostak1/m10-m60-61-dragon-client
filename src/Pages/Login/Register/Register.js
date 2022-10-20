import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [accepted, setAccepted] = useState(false)
  const [error, setError] = useState('')
  const { createUser,  updateUserProfile , verifyEmail } = useContext(AuthContext)
  const handleOnSubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photoURL = form.photo.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, photoURL, email, password)
    createUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        setError('')
        form.reset()
        handleUpdateUserProfile(name, photoURL)
        handleEmailVerify()
        toast.success('please verify your email before login')
        
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })
  }

  const handleUpdateUserProfile = (name, photoURL) =>{
    const profile = {
      displayName : name,
      photoURL: photoURL
    }
    updateUserProfile(profile) 
    .then(() =>{})
    .catch(error =>{
      console.error(error)
    })
  }
  const handleEmailVerify = () =>{
    verifyEmail()
    .then(() =>{

    })
    .catch(error =>{
      console.error(error)
    })
  }
  const handleAccepted = event =>{
    setAccepted(event.target.checked)
    console.log(event.target.checked)
  }
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control name='photo' type="text" placeholder="Photo Url" />
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
              type="checkbox" 
              onClick={handleAccepted}
              label={
                <>
                  Accept <Link to='/terms'>Terms And Conditins</Link>
                </>
              }/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Text className="text-danger">
          {error}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;