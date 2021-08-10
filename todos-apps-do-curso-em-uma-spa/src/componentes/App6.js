//>> RENDERIZAÇÃO CONDICIONAL FUNÇÕES E OPERADOR TERNÁRIO <<
/*Continuação do App5, agora substituindo o IF/ ELSE por funções e operador ternário.
*/


import React from "react";

//Este App diz "Olá, "nome", se um nome for digitado e for pressionado o botão Salvar!

class App6 extends React.Component{     
    constructor(props){
        super(props);
        this.state = {nome: undefined, txtNome: ''}   
    }    
    mudartxtNome = (evento) => {    
        this.setState({ txtNome : evento.target.value});    
    }

    persistirNome = () => {  
        this.setState({nome: this.state.txtNome})
    }      
    
    
    render(){ 

        //o IF foi substituido pela função renderFormulario
        const renderFormulario = () => {     
            return (
                <>
                    NOME <input type='text' onChange={this.mudartxtNome}/>
                    <button onClick={this.persistirNome}>Salvar</button>
                </>
            );
        } 
        
        //o ELSE foi substituído pela função renderTexto
        const renderTexto = () => {       
            return(
                <p>Olá {this.state.nome}</p>       
            );
        }

        //O operador ternario definirá qual função será rodada: a renderFormulário ou renderTexto:
        return !this.state.nome ? renderFormulario() : renderTexto();
    }
}

export default App6;