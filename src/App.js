import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import {Container, Row, Col} from 'reactstrap'
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

function App() {
  
  const [cartItem, setCartItem] = useState([])

  const addToCart = item => {
    const isAlreadyAdded  = cartItem.findIndex(
      function(array){
        return array.id === item.id 
      }
    )

    if(isAlreadyAdded !== -1){
      toast("Already added in cart", {
        type : "error",
        position: "bottom-right"
      })
      return;
    }

    setCartItem([...cartItem, item])
  }

  const buyItem = () => {
    setCartItem([])
    toast("Order placed successfully.", {
      type : "success",
      position: "bottom-right"

    })
  }

  const removeItem = item => {
    setCartItem(cartItem.filter(product => product.id !== item.id))
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addToCart={addToCart}/>
        </Col>
        <Col md={4}>
          <Cart cartItems={cartItem} buyNow={buyItem} removeItems={removeItem}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
