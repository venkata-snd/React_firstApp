import React,{Component} from 'react';

class Header extends Component {
     constructor (props){
         super(props);

         this.state = {
             title: 'React App',
             keyword: 'user search'
         }
     }
   inputChange(event){
   //console.log(event.target.value),
       this.setState({keyword:event.target.value})
       this.props.dataSearch(event.target.value)
       console.log(event.target.value)
       
    }

   render(){

        return(
            <header >
                  <div className="logo"
                   onClick = {() => { console.log("clicked")}}>
                   {this.state.title} </div>
                
                <center>
                    <input onChange = {this.inputChange.bind(this)} />
                    <h2>{this.state.keyword}</h2> 
                </center>
               
            </header>
            

          )
   }
}

export default Header;