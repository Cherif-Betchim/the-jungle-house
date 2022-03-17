import '../css/Cards.css';

import React from "react";
import {Button, Card,Container, Row,Col} from 'react-bootstrap';
import test from '../assets/286X180.png';


function CardsLayout() {

    return (
        <div>

            <Container>
                <Row className={"row justify-content-end cardRow"} md={4}>
                    <Col >
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={test}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>

                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={test}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={test}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Row className={"row justify-content-end cardRow"} md={4}>
                    <Col >
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={test}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>

                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={test}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={test}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>

        </div>


    )

}

export default CardsLayout;
