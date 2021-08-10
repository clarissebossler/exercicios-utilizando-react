/*
//>> treinando Props <<\\
(com texto sobre jsx)
*/

import React from "react";


class App3 extends React.Component{     
  constructor(props){
      super(props);
  }

  render(){          
    return(         
    <div className="caixa2">             
      <div className="titulojsx">{this.props.titulojsx}</div>
      <div className="textojsx">{this.props.children}</div>
    </div>);
  }
}


export default App3;

