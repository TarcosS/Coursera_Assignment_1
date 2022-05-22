
import './App.css';
import { Navbar, NavbarBrand} from 'react-bootstrap';
import Menu from './Components/MenuComponent';
import { DISHES } from './shared/dishes'
import { Component } from 'react';
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar bg="primary" color="light">
          <div className="container-md">
            <NavbarBrand className='text-light' href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} />
      </div>
    );
  }
}

export default App;
