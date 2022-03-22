import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


import Rating from '../components/Rating';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/product/${match.params.id}`)
      setProduct(data);
    }
    fetchData();
  }, [])
  

  console.log(product.image)
  return (
  <div>
      <Link to="/" className='btn btn-dark my-3'>Go Back</Link>

      <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item className='mt-3' >
                <h4>description</h4>
                {product.description}
              </ListGroup.Item>
            </ListGroup>
        
          <Col md={9} className='my-4 mx-3'>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Price:
                    </Col>
                    <Col>
                      <strong>{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      Status:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button 
                    className='btn btn-block btn-success' 
                    type='button' 
                    disabled={product.countInStock === 0 }>
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Col>
      </Row>
  </div>
  )
};

export default ProductScreen;
