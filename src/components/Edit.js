import React, { Component } from 'react'
import {Button,Form,FormGroup,Label,Input,FormText} from 'reactstrap';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
export default class Edit extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         date: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    
    }

    componentWillMount () {
        // console.log('Component WILL MOUNT')
        // alert("k");
        // const url = "http://localhost:3000/";
        // axios.get(url).then((res)=>{
        //     console.log(res);
        // })
        this.getData();

    }

    getData(){
    	const id = this.props.match.params.id;
   		// console.log(id);
   		const url = "http://localhost:3000/movies/"+id;
   		axios.get(url).then((res)=>{
   			// console.log(res);
   		});
    }

    handleInputChange(event) {
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        // this.setState({name:event.target.value,date:event.target.value});
    }
    handleSubmit(event) {
        // alert('A name was submited'+this.state.name+' '+this.state.date);
        const name = this.state.name;
        const date = this.state.date;
        const { history } = this.props;

        if(name.length == 0 || date.length == 0){
            alert("Tidak Boleh Kosong");
        }
        else{
            const url = "http://localhost:3000/movies/store";
            
            axios.post(url,{
                name: name,
                realesed_on: date,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(function(res){
                console.log(res.status);
                if (res.status==200) {
                history.push("/");
                }
            });
            
        }
        event.preventDefault();
    }
    
  render() {
    return (
      <div>

        <Link to="/"><Button color="success">Back</Button></Link>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleInputChange}/>
            </FormGroup>

            <FormGroup>
                <Label>Date</Label>
                <Input type="date" placeholder="Name" value={this.state.date} name="date" onChange={this.handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Button color="primary">Simpan</Button>
            </FormGroup>
        </Form>
      </div>
    )
  }
}
