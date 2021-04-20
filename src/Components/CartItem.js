import React from 'react'
import {Card, CardImg, CardBody, CardText, CardTitle, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const CartItem = ({product, addToCart}) =>{

    return(
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%" src={product.smallImage}/>
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">{product.productPrice}</CardText>
                <Button color="info" onClick={() => addToCart(product)}>Buy Now</Button>
            </CardBody>

        </Card>
    )
}

export default CartItem;
