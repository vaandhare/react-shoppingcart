import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CartItem from './CartItem'
import { random, commerce, datatype} from 'faker'
import {Container, Row, Col} from 'reactstrap'

// const apiKEY = ""
// const apiURL = "https://api.pexel.com/v1/search?query=laptop&per_page=6&page1"
const url = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json"

const BuyPage = ({addToCart}) => {

    const [product, setProduct] = useState([])

    const fetchPhotos = async () => {
        const {data} = await axios.get(url, {})

        const { photos } = data 

        const products = photos.map(item => ({
            smallImage: item.src.medium,
            tinyImage: item.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: datatype.uuid(),
        }));

        setProduct(products);
    }

    useEffect(() => {
        fetchPhotos()
    }, []);

    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Product
            </h1>
            <Row> 
                { product.map(item => (
                    <Col md={4} key={item.id}>
                        <CartItem product={item} addToCart={addToCart}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )

}

export default BuyPage;