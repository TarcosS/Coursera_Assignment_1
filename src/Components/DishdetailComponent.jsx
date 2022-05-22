import React, {Component} from 'react';
import {Row,Card,Col} from 'react-bootstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Row xs={2} md={2} className="g-1 mt-1">
                <Col md={6} xl={6} sm={12} xs={12}>
                    <Card className='mb-3 mx-4' >
                        <Card.Img variant="top" src={this.props.image} />
                        <Card.Body>
                            <Card.Title>{this.props.name}</Card.Title>
                            <Card.Text>{this.props.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} xl={5} sm={12} xs={12} className='mb-3 mx-4'>
                    <div className='h4'>Comments</div>
                    {this.props.comments.map((comment) => {
                        return (
                            <ul className='list-unstyled' key={comment.id}>
                                <li>"{comment.comment}"</li>
                                <li>--{comment.author}, {comment.date}</li><br />
                            </ul>
                        )
                    })}                             
                </Col>
            </Row>
            
        )
    }
}
export default DishDetail;