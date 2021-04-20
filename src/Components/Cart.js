import React from 'react'
import {ListGroup, ListGroupItem, Button, CardHeader, Card, CardFooter, Row, Col, Container} from 'reactstrap'

const Cart = ({cartItems, removeItems, buyNow}) => {
    let amount = 0;

    cartItems.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    })

    return(
        <Container fluid>
            <h1 className="text-success">Cart</h1>
            <ListGroup>
                {cartItems.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img height={80} src={item.tinyImage}/>
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">{item.productName}</div>
                                <span>Price: {item.productPrice}</span>
                                <Button color="danger" onClick={() => removeItems(item)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
                {
                    cartItems.length != 0 ? (
                        <Card className="text-center mt-3 ">
                            <CardHeader>Total: {amount}</CardHeader>
                            <CardFooter>
                                <Button color="success" onClick={buyNow}>Pay here</Button>
                            </CardFooter>
                        </Card>
                    ) : (<span className="text-warning">Cart is empty!</span>)
                }
            </ListGroup>
        </Container>
    )

}

export default Cart;