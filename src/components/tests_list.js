import React from 'react';

const TestsList = (props) => {
    console.log(props)

    const output = props.tests.map((list) => {
        return(
            <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <h3>Name:{list.first_name},{list.last_name}</h3>
                <h4>Email:{list.email},<br/>
                Gender:{list.gender},<br/>
                IP_address:{list.ip_address}</h4>
              </div>
              </div>
          </div>
              
            
            
            
          /*  <div>
                <h3>Name:{list.first_name},{list.last_name}</h3>
                <h4>Email:{list.email},<br/>
                Gender:{list.gender},<br/>
                IP_address:{list.ip_address}</h4>
            </div> */
        )
    })
    return(
         
         <div >
             <div className="data" >
             <h1>This is the JSON DATA:</h1>
             </div>
             {output}
         </div>

    )

}

export default TestsList;