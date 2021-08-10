//>> RENDERIZAÇÃO CONDICIONAL com IF ELSE <<

//RESUMO: A depender do estado em que o componente se encontra, renderizaremos o JSX de uma maneira ou de outra, colocando um IF dentro do método render.



import React from "react";

//Este App  ora renderiza o campo para digitar o nome, ora renderiza a mensagem "Olá, "nome" (se um nome for digitado e for pressionado o botão Salvar)

class App5 extends React.Component{     
    constructor(props){
        super(props);
        this.state = {nome: undefined, txtNome: ''}  //primeiro, como a mensagem "olá" nome só aparece quando um nome estiver definido (digitado e salvo), o estado inicial da prop nome será undefined. (Como desejamos que nome retorne false enquando nada tiver sido salvo, undefined retorna false). A prop txtNome guardará os estados do valor enquanto ele estiver sendo digitado, ou seja, sofrendo o evento onChange.  
    }    
    mudartxtNome = (evento) => {       //este campo agora será referente a txtNome          
        this.setState({ txtNome : evento.target.value});    
    }

    persistNome = () => {   //metodo para chamar aoClicar: salva o txtNome em nome.
        this.setState({nome: this.state.txtNome})
    }      
    
    //se nome=undefined, renderiza input e botão. se nome=valor valido, renderiza Olá {nome}.
    render(){  
        if(!this.state.nome){        //undefined no if retorna false. A exclamação é negação (inverte a lógica). Logo, caso nome seja undefined, este if retornará true.
            return (
                <>
                    NOME <input type='text' onChange={this.mudartxtNome}/>   {/*este campo agora é referente a txtnome. Roda a função quando onChange*/}
                    <button onClick={this.persistNome}>Salvar</button>
                </>
            );
        }else{
            return(
                <p>Olá {this.state.nome}</p>       
            );
        }
    }
}

export default App5;

/*
TEXTO COMPLETO DA AULA:

Neste exercício usaremos um valor do estado para renderizar condicionalmente JSX diferentes.

Como na aula anterior temos um componente com um estado que contém um nome, agora de valor padrão undefined. Também temos um txtNome que gravará alterações em um campo de texto. (O txtNome é um campo no state para guardar os valores do campo de texto enquanto o botão não era clicado, para só então jogar esse valor no campo nome.)

O componente contém um método para alterar o nome e um método para pegar o valor de txtNome e colocar em nome.

Limpamos o método render porque é nele que vamos nos focar.

Uma lição muito importante em JSX é que estamos retornando um valor (nosso JSX inteiro). Expressões de lógica de programação que não produzam valores, não podem aparecer dentro do JSX. Isso inclue os condicionais if e else, switch e os laços todos.

No entanto, se desejarmos usar um condicional é possível: Ele deve aparecer antes do return no método render ou podemos usar condicional ternário.

Vamos modificar o nosso método render para ter telas diferentes se tivermos ou não o nome para mostrar:

Observe que pela limitação descrita tivemos que fazer dois returns.

Porém, é boa prática evitar múltiplos return quando possível, fazendo uma função que renderiza uma versão do componente e outra que renderiza a outra e decidir com ternário qual usar.

No próximo exercício (App6), vamos repetir o mesmo exercício mas utilizando então funções e operadores ternários em lugar do IF/ELSE.
*/