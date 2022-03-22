import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios'

import Product from '../components/Product'
// import products from '../products'


const HomeScreen = () => {
    const [products, setProducts] = useState([])
    const fetchProduct = async() => {
        const { data } = await axios.get('/api/products')
        setProducts(data)
    
    }

    useEffect(() => {
      fetchProduct();
    }, [])
    


  return (
    <Row>
        <h2>Lattest products</h2>
        <Row>
        {
            products.map(product=>(
                <Col sm={12} md={6} lg={4} xl={3}  key={product._id} >
                    <Product product={product} />
                </Col>
            ))
        }
        </Row>
    </Row>
)
};

export default HomeScreen;
