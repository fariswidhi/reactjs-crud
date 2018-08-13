import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {  List } from './App';
import  Index  from './components/Index';
import Create from './components/Create';
import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './components/Detail';
import Navbar from './components/Navbar';
import {Container,Card,CardBody} from 'reactstrap';

const style = {
    marginTop: "100px;",
};

ReactDOM.render(

    <Router>
        
    <div>
<Navbar/>
    <Container >
        <Card style={{marginTop:"50px"}}>
            <CardBody>
                <Switch>

            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route exact path="/" component={Index}/>
            </Switch>
                
            </CardBody>
        </Card>
    </Container>
    </div>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
