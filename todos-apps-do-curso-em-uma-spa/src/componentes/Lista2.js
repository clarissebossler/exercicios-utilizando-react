/*
//>> RENDERIZAÇÃO DE LISTAS - modo: 2<<\\

Há dois modos de fazer renderização de listas:
MODO 1 :  criamos um único componente LISTA, e dentro do método Render(), construímos o HTML com os elementos da lista.

MODO 2: criamos um subcomponente ITEM no qual, dentro do método Render() da lista, criamos a tag ITEM e passamos cada um desses elementos.
*/


//aqui famos fazer do modo 2:


import React from "react";

class Lista2 extends React.Component {
    constructor(props){
        super(props);
        this.state = [    
            //a motivação de fazermos do "modo2" é o fato dos itens da lista serem mais complexos, com vários atributos:
            {id1: 1, nome: "item1", completo: true},
            {id2: 2, nome: "item2", completo: false},
            {id3: 3, nome: "item3", completo: true},
            {id4: 4, nome: "item4", completo: false},
        ]
    }

    render(){
        return (
            <ul> 
                {this.state.map(item => (
                //a classe inteira Item entra aqui dentro:
                    <Item id={item.id} completo={item.completo}>
                        {item.nome}
                    </Item>
                ))}
            </ul>   
        )
    }
}


//class Item é subclasse de Lista2
class Item extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const textDecoration = this.props.completo ? 'line-through' : 'none';
        //o texto será taxado caso "completo" seja true (como riscar um item concluído em uma lista de afazeres) >>> TEM QUE USAR EXATAMENTE ESTE NOME NA CONST PARA FUNCIONAR <<<

        return (
            <li data-id={this.props.id} style={{textDecoration}}>
                {this.props.children}
            </li>
        )
    }
}

export default Lista2;

/*
Nesse exemplo temos algo mais complexo para renderizar, a lista tem um nome, que aparecerá na tela, um ID que colocaremos em um campo data- e tem um completo que indica se ela deve ser tachada ou não.

Vamos então criar um componente para lidar com tudo isso, fazendo com que toda essa complexidade não esteja no componente Lista.

Observe que aqui também foi usado o key, mas como temos um id nos items esse id foi usado no key para distinguir cada item.

Optamos por passar o conteúdo da lista por children para permitir que seja usado conteúdo HTML ou outros componentes, também passamos por props as informações adicionais que precisam ser colocadas no elemento li.

Assim exemplificamos as duas abordagens de renderização de listas.

Vale apontar que outras linguagens de programação utilizam laços para fazer a renderização de listas. No React, vale a pena adotar a abordagem do uso do map, pois diferentemente dos laços ele produz um resultado JSX imediatamente.
*/