import React, {Component} from 'react';
import {Card,Col,Row,Container} from 'react-bootstrap';
class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {  
            selectedDish: null
        }
    }
    onDishesSelect(dish) {
        if(this.state.selectedDish === null){
            this.setState({selectedDish:dish});
        }else{
            this.setState({selectedDish:null});
        }
    }
    renderDish(dish) {
        if (dish != null){
            return(
                <Card>
                    <Card.Img variant="top" src={dish.image} />
                    <Card.Body>
                        <Card.Title>{dish.name}</Card.Title>
                        <Card.Text>{dish.description}</Card.Text>
                    </Card.Body>
                </Card>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    render() {
        
    
        const menu = this.props.dishes.map((dish) => {
            return (
                <Col xs={12} sm={6} md={4}>
                    <Card onClick={()=>this.onDishesSelect(dish)} key={dish.id} className='mb-3' >
                        <Card.Img variant="top" src={dish.image} />
                        <Card.Body>
                            <Card.ImgOverlay>
                                <Card.Title>{dish.name}</Card.Title>
                            </Card.ImgOverlay>
                            {dish.visibility ? <><Card.Text>{dish.description}</Card.Text><Card.Text>{dish.price}</Card.Text></> : null}
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
        
        return (
            <Container style={{ border: "1px solid red"}}>
                <Row xs={1} md={2} className="g-4 mt-1">
                        {menu}
                </Row>    
                <Row>
                    {this.renderDish(this.state.selectedDish)}
                </Row>
            </Container>        
        )
    }
}

export default Menu;