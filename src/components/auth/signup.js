import React from 'react';
import Ugo from '../ugo'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
function Signup() {
    return (
        <div className='App'>
            <Ugo></Ugo>

            <form>

            <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Full name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

            <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="User name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Forgot Your Password?" />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                    SIGN up
                </Button>
            </form>
        </div>
    )
}


export default Signup;