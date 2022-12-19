import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css"


export default function Login() {
    return <>
        <div className='container_log'>
            <div className="form_div">
                <Form className='form'>
                    <div className='login'>
                        <h1>Login</h1>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="button" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <div className='image_div'>
                <img src="https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg" alt="" />
            </div>
        </div>
    </>
}