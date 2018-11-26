import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './test.json';
import TestsList from './components/tests_list';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
             tests: JSON,
             filtered: JSON

        }
    }  
    
    filteredData(keywords){

        let outfiltered = this.state.tests.filter((item)=>{
            return item.first_name.indexOf(keywords) > -1
        })

        this.setState({filtered:outfiltered})
         

    }

    render(){
    return(
        <div>
            <Header dataSearch={(data)=> this.filteredData(data)}></Header>
            <TestsList tests={this.state.filtered}></TestsList>

        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

