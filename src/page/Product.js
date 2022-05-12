import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const Product = () => {
    let { id } = useParams();
    let [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/bilvin-luinel/test-shopping/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
        console.log(data);
    }

    useEffect(() => {
        getProductDetail();
    }, [])

    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>{product?.price}RP</div>
                    <button className="buying">구매</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Product