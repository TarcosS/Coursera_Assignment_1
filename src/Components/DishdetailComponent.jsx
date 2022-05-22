import React, {Component} from 'react';
import {Row,Card,Col,Container} from 'react-bootstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderDish() {
        const dish = this.props.selectedDish
        if(dish != null) {
            return(
                <Col md={6} xl={6} sm={12} xs={12}>
                    <Card className='mb-3 mx-4' >
                        <Card.Img variant="top" src={this.props.dish.image} />
                        <Card.Body>
                            <Card.Title>{this.props.dish.name}</Card.Title>
                            <Card.Text>{this.props.dish.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        }
    }
    render() {
        return (
            <Container>
                <Row xs={2} md={2} className="g-1 mt-1">
                    {this.renderDish()}
                </Row>
            </Container>
            
            
        )
    }
}
export default DishDetail;