import React, {Component} from 'react';
import {Card,Col,Row,Container} from 'react-bootstrap';
class Menu extends Component {
    render() {        
        const menu = this.props.dishes.map((dish) => {
            return (
                <Col xs={12} sm={12} md={6}>
                    <Card key={dish.id}  onClick = {() => this.props.onClick(dish.id)} className='mb-3 mx-4' >
                        <Card.Img variant="top" src={dish.image} />
                        <Card.Body>
                            <Card.ImgOverlay>
                                <Card.Title>{dish.name}</Card.Title>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
        
        return (
            <Container style={{ borderLeft: "1px solid black"}}>
                <Row xs={2} md={2} className="g-3 mt-1">
                        {menu}
                </Row>    
            </Container>        
        )
    }
}

export default Menu;