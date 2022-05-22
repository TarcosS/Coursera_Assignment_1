import React, {Component} from 'react';
import {Card,Col,Row,Container} from 'react-bootstrap';
import DishDetail from './DishdetailComponent'
class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {  
            selectedDish: null
        }
    }
    onDishesSelect(dish) {
        this.setState({selectedDish:dish});       
    }
    renderDish(dish) {
        if (dish != null){
            return(
               <DishDetail name={dish.name} image={dish.image} description = {dish.description} comments = {dish.comments}/>
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
                <Col xs={12} sm={12} md={6}>
                    <Card onClick={()=>this.onDishesSelect(dish)} key={dish.id} className='mb-3 mx-4' >
                        <Card.Img variant="top" src={dish.image} />
                        <Card.Body>
                            <Card.ImgOverlay>
                                <Card.Title style={{position: "absolute"}}>{dish.name}</Card.Title>
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
                <Row>
                    {this.renderDish(this.state.selectedDish)}
                </Row>
            </Container>        
        )
    }
}

export default Menu;