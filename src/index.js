import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './test.json';
import TestsList from './components/tests_list';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
             tests: JSON
        }
    }    
    render(){
    return(
        <div>
            <Header></Header>
            <TestsList tests={this.state.tests}></TestsList>

        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

