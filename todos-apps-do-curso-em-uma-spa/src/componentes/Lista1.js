/*
//>> RENDERIZAÇÃO DE LISTAS - modo: 1<<\\

Há dois modos de fazer renderização de listas:
MODO 1 :  criamos um único componente LISTA, e dentro do método Render(), construímos o HTML com os elementos da lista.

MODO 2: criamos um subcomponente ITEM no qual, dentro do método Render() da lista, criamos a tag ITEM e passamos cada um desses elementos.
*/


import React from "react";

class Lista1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: ["item1", "item2", "item3", "item4"]
        }
    }

    render(){
        return (
            <>
                <ul> 
                    {this.state.items.map((item, indice) => <li key={indice}>{item}</li>)}
                </ul>
            </>
        )
    }
}

export default Lista1;

/*
Muitas vezes temos listas para renderizar usando React. Para fazer isso podemos decidir por duas abordagens quanto às listas:

A primeira é renderizar os items usando HTML simples.

A segunda é criar um componente que será usado como item da lista.

Ambas tem vantagens e desvantagens.

A primeira abordagem é mais simples, mas quando os items são complexos pode ser um pouco confusa e não é candidata ao reaproveitamento.

Já a segunda abordagem é mais complexa, no sentido de termos um ou até dois componentes extras gerenciando a renderização da lista. No entanto, eles pode ser reaproveitados e funcionam melhor do que a primeira abordagem quando os items tem um HTML complexo.

Vamos começar com uma lista simples:
A forma mais simples e mais utilizada para renderizar uma lista com React é utilizando a função map().

Ela deve produzir um JSX para cada item da lista.

Vamos completar o método render():
É muito importante observar que colocamos uma propriedade key nos <li></li> essa propriedade permite que o React distingua cada item, o que permite a atualização de apenas um item caso seu valor mude no state.

Toda vez que criamos items por map precisamos passar o key, que pode ser absolutamente qualquer coisa, contanto que nenhum item tenha um key igual ao do outro.

Nesse caso usamos o índice (posição no array) do item para gerar seu key.

Veja que o map produz um array de JSX. No entanto, o React renderiza esse array como JSX separados. Assim todos os items são renderizados na tela sem a necessidade de fazer joins ou outra estratégia para transformá-lo em string.

Para a proxima aula (lista2), vamos pensar em uma lista um pouco mais complexo que justifique o uso de um componente para os items da lista.
*/