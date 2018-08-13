import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Button,ListGroup,ListGroupItem} from 'reactstrap';
import axios from 'axios';
export default class Index extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        data: []
    }
    this.remove = this.remove.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData(){

    const url = "http://localhost:3000/movies/all";
    axios.get(url).then(function(res){
      let data = res.data.result;
      let arr = [];
      // console.log(res.data);
      data.map(function(item){
        // console.log(item);
        arr.push(item);
      })

      this.setState({
        data: arr
      });

      console.log(this.state.data);
    }.bind(this));
  }
  componentWillMount() {
    this.getData();
  }
  test(){
    alert("kok");
  }
  remove(event,data){
    // alert(id);
    const id = data;

    const url = "http://localhost:3000/movies/"+id;
    // console.log(url);
    axios.delete(url).then((res)=>{
      // console.log(res);
      if (res.status==200) {
          // this.test();
          this.getData();
      }
    })
    // // alert(data);
    event.preventDefault();
  }

  render() {
    const data = this.state.data.map((item,i)=>{
      return (
          <ListGroupItem>
            {item.name}
            <br/>
            {item.realesed_on}
            <div class="float-right">

        <Link to={{pathname:'/edit/'+item._id}}><Button color="success">Edit</Button>

        </Link>

            <Button color="danger" onClick={(e)=>this.remove(e,item._id)}>Hapus</Button>
            </div>

          </ListGroupItem>
        )
    });

    return (
      <div>
        <Link to="/create"><Button color="success">Create</Button>

        </Link>
        <br/>
        <br/>
        <ListGroup>
        {data}

        </ListGroup>
      </div>
    )
  }
}
