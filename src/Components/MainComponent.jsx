import { Navbar, NavbarBrand} from 'react-bootstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'
import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';

class Main extends Component{

    constructor(props) {
        super(props);

        this.state = {
        dishes: DISHES,
        selectedDish: null
        };
    }

    onDishesSelect(dishId) {
        this.setState({selectedDish: dishId});       
    }
    render() {
        return (
        <div>
            <Navbar bg="primary" color="light">
            <div className="container-md">
                <NavbarBrand className='text-light' href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <Menu dishes = {this.state.dishes} onClick={(dishId)=>this.onDishesSelect(dishId)}/>
            <DishDetail selectedDish = {this.state.selectedDish} dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
        );
    }
}

export default Main;
