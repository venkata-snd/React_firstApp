import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
class App extends Component {
    render(){
    return(
        <div>
            <Header></Header>
               <h1> This is my react app </h1>
               <h2> This is first app</h2>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

