import React, { Component } from 'react'
import Square from './Square';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';

class ShoppingList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:null,
         squares:Array(9).fill(null)
      }
    }
    renderSquare(i){}
    
  render() {
    const newTo = {
        pathname: "detail/1234",
        param1: "pa"
    };
    return (
      <div className="shopping-list">
        <h3>Halaman Home</h3>
        
        <Link to={newTo}><Button color="danger">Pindah</Button></Link>

      </div>
    )
  }
}

export default ShoppingList;