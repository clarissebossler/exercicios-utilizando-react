/* >> HOOK DE ESTADO <<

HOOKs são FUNÇÕES auxiliares para componentes funcionais.

HOOK useState()
Serve para criar estados em componentes funcionais. Retorna um vetor com 2 coisas: uma referencia ao estado e uma função para alterar esse estado.

Diferentes dos componentes do tipo classe, (em que todas as informações estão contidas dentro do objeto), aqui nos componentes funcionais podemos criar várias variáveis para cada uma das informaões do estado.

*/

import React, {useState} from 'react';    //useState()precisa ser importada


// DESESTRUTURAÇÃO >>  como a variável vai receber 2 valores, fica mais fácil representa-la assim com array.
function Nome1() {
    const [nome, setNome] = useState('Clarisse');  //é uma convenção escrever desta forma.  
    return (<p>{nome}</p>);
    //>>SEMPRE use CONST, nunca LET.
}

//Para ler o estado do nome, utilize a constante nome.
//Para alterar o estado no nome, utilize a função setNome()
//É uma convenção estes 2 itens (Manter esta convenção de nomeclatura: xxxx e setXxxx. No parâmetro, pode-se ou não definir (ou não) o estado inicial: 'Clarisse' (Seria um default?)

//>> setNome:
function Nome2() {
    const [nome, setNome] = useState('Clarisse (clique)');
    const onClick = () => setNome('Alice');   //ao clicar, seta 'Alice'
    return <p onClick={onClick}>{nome}</p>; //aplica a função onClick ao clicar nesta tag.
}

//>> Atenção: setNome setará (subscreverá) todo o estado 'Clarisse' (e não só a propriedade indicada, caso haja mais de uma. Ou seja, apaga as demais.). Demonstração:

function Pessoa() {
    const [pessoa, setPessoa] = useState({nome: 'Rildo (clique 2x, inspecionando)', idade: 36})  
    const onClick = () => {setPessoa({nome: 'Dante'}); console.log(pessoa);}  //o console mostrará que a idade foi subscrita.
    return (<p onClick={onClick}>{pessoa.nome}</p>);
}

//Veja infos completas:
/*
Uma diferença importantíssima entre a função de alteração do estado criada pelo useState e a função setState que usávamos nos componentes tipo classe é que ela não aceita a alteração parcial de um objeto, ela sobrescreve o objeto completamente, que deve ser passado em sua totalidade.

Imagine o seguinte estado:
{ nome: 'teste', idade: 20 }

Em componentes como classe podíamos fazer:
setState({ idade: 21 });

que ele manteria o restante do objeto e alteraria apenas a idade (diferentemente dos componentes funcionais).



Em componentes funcionais devemos fazer (assumindo que setState é nossa função de alteração):

setState({ nome: 'teste', idade: 21 });

Quer dizer que temos que saber quais são os valores de todas as outras propriedades do estado para fazer a alteração de apenas uma??

Na verdade não, novamente a desestruturação pode nos ajudar:

setState({ ...state, idade: 21 });

Usando desestruturação de objetos, todas as propriedades que ele tem, assim como seus valores, são passadas para o novo objeto. Assim podemos passar em seguida a propriedade que desejamos alterar e seu novo valor.

Essa sintaxe também serve para adicionar novas propriedades no objeto.

Vamos agora fazer um exemplo completo de uso de state com leitura e alteração do estado:
*/


function Nome3() {
    const [nome, setNome] = useState('');  
    return(
        <>
            <input type='texto' value={nome} onChange={(evt) => setNome(evt.target.value)} />
            <p>Olá {nome}</p>    {/*seria uma arrow function anonima? existe entao?*/}
        </>
    )
}


export {Nome1, Nome2, Pessoa, Nome3};

/*
Como dito anteriormente, componentes funcionais não podiam ter estados até a atualização do React que nos deu os hooks.

O hook de estado é chamado de useState() precisamos importá-lo de dentro do React antes de poder utilizá-lo em nossos componentes.

useState é uma função que produz um vetor, na primeira posição vem uma referência ao estado que você acabou de criar. Na segunda posição vem uma função que permite modificar o estado. Se desejar um valor padrão inicial, ele pode ser passado por parâmetro na chamada do useState.

Como é estranho usar um array dessa forma, sempre optamos pela desestruturação imediata do retorno do useState em duas constantes.

Os nomes das constantes você escolhe (tanto da constante de leitura como da função de alteração), mas é muito conveniente manter essa convenção de usar na função o mesmo que foi usado na constante precedido da palavra set. Que é uma nomenclatura muito comum no Java, de onde o javascript herda sua sintaxe.

Uma diferença importantíssima entre a função de alteração do estado criada pelo useState e a função setState que usávamos nos componentes tipo classe é que ela não aceita a alteração parcial de um objeto, ela sobrescreve o objeto completamente, que deve ser passado em sua totalidade.

No exemplo acima criamos um estado chamado nome e uma função setNome para alterá-lo. O valor inicial do nome é dado pelo parâmetro passado ao setState, no caso string vazia.

Conforme o usuário digita no campo de texto, o nome é alterado para o valor do campo. Isso faz com que o React atualize imediatamente o H1 abaixo.

Lembre-se, da mesma forma que nos componentes tipo classe, nunca faça atribuições ao estado diretamente, sempre utilize a função. Senão o React não atualizará o componente para mostrar a mudança na tela.

Para garantir que esse erro não aconteça, sempre use const antes de desestruturar o useState nunca use let.

Nos componentes funcionais podemos fazer um estado para cada valor que desejamos utilizar, diferentemente das classes em que apenas um estado era possível e deveria sempre ser um objeto.

Por isso, é aconselhável fazer mais useState, por exemplo, um para cada valor em vez de fazer apenas um com um objeto dentro.

Claro que fica a critério e bom senso do programador quando usar objetos e quando guardar os valores separadamente.

Leve em conta a complexidade, quais deles geram atualizações na tela e quantos objetos você precisa guardar, se for mais um opte por colocá-los inteiros cada um em seu state em vez de fazer um state para cada propriedade.

Em seguida passamos para o hook que equivale ao ciclo de vida em um componente funcional.
*/