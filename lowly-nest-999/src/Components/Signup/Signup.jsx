import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sighup.css"


export default function Signup (){
    return <>
        <div className='container'>
            <div className="form_div">
                <Form className='form'>
                    <div className='login'>
                        <h1>SighUp</h1>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password Again</Form.Label>
                        <Form.Control type="password" placeholder="Password Again" />
                    </Form.Group>
                    
                    <Button className="button" variant="primary" type="submit">
                        Signup
                    </Button>
                </Form>
            </div>
            <div className='image_div'>
                <img src="https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg" alt="" />
            </div>
        </div>
    </>
}