//>> CICLO DE VIDA <<
/*Continuação do App5 e App6, agora salvando os valores digitados no formulário nos cookies (sessionStorage)

>> O QUE É???
Ao carregar uma página desenvilvida em React, os componentes são primeiro construído, em seguida é renderizado na tela. Depois pode receber atualizações de seus ESTADOS e PROPS (e re-renderizado), e por fim é destruído (quando o usuário fecha a aba ou muda de página).

Componentes React possuem um ciclo de vida:
INICIALIZATION > MOUNTING > UPDATION > UNMOUNTING


>> PARA QUE SERVE?
Podem existir componenetes que serão populados com dados apenas quando for renderizado. Ou salvar dados dos cookies quando o usuário sair da aplicação. Ou podemos buscar alguma informação ao iniciar um componente.
Há no react métodos para acessar os componentes nesses momentos específicos.



Existem diversos métodos que rodam especificamente em determinado momento do ciclo de vida do componente (ver os metodos na pasta /JavaScript/K - Lets Code JS e React/arquivos de apoio/reactimg4.PNG)

Cada passo do ciclo de vida está representado por um diagrama nessa imagem. Se desejarmos fazer algum processamento durante uma das etapas do ciclo de vida do componente basta adicionar um método com o mesmo nome.

Por exemplo, o momento mais comum de interagir com o ciclo de vida de um componente é o componentWillMount que roda pouco antes do componente renderizar na tela.

No entanto, novas versões do React desencorajam o uso desse método e recomendam fazer lógicas pré-construção do componente no construtor da classe ou em componentDidMount().

É muito comum fazer acesso a dados para popular o estado do componente usando esses métodos.

Vamos fazer um exemplo nesse sentido.
*/


import React from "react";

//Este App diz "Olá, "nome", se um nome for digitado e for pressionado o botão Salvar. Caso a página seja atualizada, não será necessario digitar o nome novamente, este dado foi salvo e recuperado a partir dos cookies (sessionStorage).

class App7 extends React.Component{     
    constructor(props){
        super(props);
        this.state = {nome: undefined, txtNome: ''}   
    }    
    mudartxtNome = (evento) => {    
        this.setState({ txtNome : evento.target.value});    
    }

    //sessionStorage é a area que armazena cokkies
    componentDidMount = () => {          //<< Este é um método de cilco de vida. 
        const nome = sessionStorage.getItem('nome');  
        if (nome) this.setState({nome});     //Caso a pagina seja recarregada (didMount), procura no sessionStorage do navegador (get iteM) se ele tem um valor para o nome, e recarrega COM este valor
    }


    persistirNome = () => {  
        this.setState({nome: this.state.txtNome})
        sessionStorage.setItem('nome', this.state.txtNome)  //Vamos aproveitar para colocar o nome no sessionStorage quando o usuário clicar no botão:
        
        //setItem é um metodo com 1 argumentos:'nome' é o nome que o item receberá no cokkie, e this.state.txtNome é o valor que será armazenado.)
    }      
    
    
    render(){ 

        const renderFormulario = () => {     
            return (
                <>
                    NOME <input type='text' onChange={this.mudartxtNome}/>
                    <button onClick={this.persistirNome}>Salvar</button>
                </>
            );
        } 
        
        
        const renderTexto = () => {       
            return(
                <p>Olá {this.state.nome}</p>       
            );
        }
        return !this.state.nome ? renderFormulario() : renderTexto();
    }
}


export default App7;
/*
Se você preencher seu nome, clicar no botão e recarregar a tela, observe que ele se mantém. O componentDidMount buscou o valor no sessionStorage do navegador e alterou o estado assim que o componente renderizou.

Você pode usar qualquer um dos métodos da imagem mas temos que fazer algumas ressalvas:

Já existe uma marcação do método componentWillMount para depreciação, ele não estará disponível nas futuras versões do React
Da mesma forma que o método componentWillMount, o método componentWillRecieveProps já está marcado para depreciação, ele não estará disponível nas futuras versões do React.
componentWillUpdate também é um método marcado para depreciação, ele não estará disponível nas futuras versões do React.
Os métodos marcado para depreciação serão substituídos mas continuarão disponíveis pelos nomes:

UNSAFE_componentWillMount
UNSAFE_componentWillReceiveProps
UNSAFE_componentWillUpdate
Esses métodos permitem código blocantes, assim, causam problemas em contextos assíncronos.

O novo método que substitui o componentWillReceiveUpdate será:

getDerivedStateFromProps
E o método que substituirá componentWillUpdate será o getSnapshotBeforeUpdate(prevProps, prevState) ele deverá retornar um objeto que estará disponível no método componentDidUpdate(prevProps, prevState, snapshot).
*/