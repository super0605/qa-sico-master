import React, { Component } from 'react';
import './index.css'
import {
    Button,
    Card,
    CardBody,
    Form,
    Input,
    Label,
    FormText,
    FormGroup,
    CardTitle,
    CardText,
    CardImg,
    Row,
    Col,
} from 'reactstrap';

const styles = {
    card: {
        width: 280,
        height: 370
    },
    signUpBtn: {
        borderRadius: 20,
        borderColor: 'blue',
        fontWeight: 'bold',
        fontSize: '14px',
        color: 'blue',
        cursor: 'pointer',

    }
}
export default class SignUpForm extends Component {
    // constructor() {
    //     super();

    // }
    handleSignUp(e) {
        e.preventDefault()

    }
    render() {
        return (
            <Row>
                <Col md={{ size: 8, order: 4, offset: 2 }} style={{
                    maxWidth: '180px',
                    maxHeight: '270px'
                }}>
                    <Card style={styles.card} >
                        <CardBody>
                            <CardTitle>Sign Up!</CardTitle>
                            <Form id="signupForm">
                                <FormGroup>
                                    <Input type="text" name="Your Name" placeholder="Your Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="email" name="Your Email" placeholder="Email Address" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="Your Phone Number" placeholder="Your Phone Number" />
                                </FormGroup>
                                <FormGroup style={{ margin: 10 }}>
                                    <Label for="signupForm">
                                        <Input type="checkbox" className="form-check-input" />
                                        I agree to the <b>terms and conditions</b></Label>
                                </FormGroup>
                                <FormGroup style={{margin: '10px 49px '}}>
                                    <Button
                                        onClick={this.handleSignUp}
                                        style={styles.signUpBtn}
                                        outline
                                    >
                                        SEND THIS APP!
                                    </Button>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}