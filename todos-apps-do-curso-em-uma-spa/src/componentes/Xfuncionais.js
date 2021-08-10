//>>COMPONENTES FUNCIONAIS<<

/* Em vez de serem objetos, são funções<<

Componentes funcionais são de fato mais simples, eles são apenas uma função, veja um exemplo:
*/

import React from 'react';     //Mesmo que aparentemente não seja usada, não esqueça da importação do React nos componentes funcionais! Ela garante o uso do JSX no componente.

function Hello1(){
    return (
        <p>Olá 1</p>
    );
}

/* Simples assim construímos um componente funcional que renderiza um H1 com o texto "Hello!". Para fazer um paralelo com os componentes tipo classe que vimos, 
>>>>>>> PENSE QUE O COMPONENTE FUNCIONAL É O MÉTODO RENDER DO COMPONENTE TIPO CLASSE. SEU RETORNO É O QUE SERÁ MOSTRADO NA TELA. <<<<<<

Diferentemente do render() o componente funcional recebe props em seu parâmetro, então basta utilizá-las diretamente. Veja o exemplo: */


function Hello2(props){
    return(<p>{props.texto}</p>);
}

//Da mesma forma podemos passar children:

function Hello3(props) {
    return (
        <>{props.children}</>    
    )
}


/*  >>  DESESTRUTURANDO PROPS:  <<

Uma prática muito comum em componentes funcionais é desestruturar o props imediatamente dentro do parâmetro do componente, o que nos desobriga de escrever props. sempre que formos usar. Veja os exemplos anteriores usando desestruturação: */


function Hello4({children}) {     
    return <>{children}</>    
}

/* Também dá para fazer a desestruturação sem o children (definido como atributo, como em Hello2):*/


function Hello5({texto}) {
    return (<p>{texto}</p>)
}


/*E componentes extremamente simples podem ser criados como arrow functions: */

const Hello6 = ({texto}) => <p>{texto}</p>;


export {Hello1, Hello2, Hello3, Hello4, Hello5, Hello6}


/* Mais limpo assim, não é?

Os componentes funcionais eram considerados os "componentes burros" do React, eles eram componentes simplificados que só tinham props e renderizavam html na tela. Eles não eram capazes de ter estado, e portanto de realizar alterações de estado. Não tinham os métodos de ciclo de vida, o que não permitia que coletassem dados externamente, o que chamamos na programação funcional de efeitos colaterais (side effects).

E por esses motivos eram usados apenas para coisas mais simples no React. No entanto, nas últimas atualizações da biblioteca, eles foram revistos e o React introduziu o conceito de Hooks, os hooks permitem aos componentes funcionais terem estado, efeitos, modificar seu estado e uma série de outras capacidades.

Sendo assim, os componentes tipo classe que se tornaram obsoletos e hoje a recomendação é que tudo seja feito por componentes funcionais. O time do React é funcional, portanto, é natural que eles tenham a tendência de não depender da abordagem orientada a objetos usada nos componentes tipo classe.

Você pode achar estranho que tanto uma função como uma classe podem ser componentes no React, mas lembre-se, a orientação a objetos do JavaScript é ilusória, por mais que estejamos fazendo uma classe, por baixo dos panos o JavaScript vai transformá-la em uma função (ele não tem o conceito de classe).

Sendo assim, classes e funções são a mesma coisa. Você também pode estar pensando: sacanagem mostrar componentes como classes para depois dizer que eles estão em desuso!

Fazemos isso porque em códigos legados existe grande chance de você cruzar com componentes como classes, pois eles foram por muito tempo a única forma de componente em que os conceitos de estado e ciclo de vida existiam.

Também porque, agora que você conhece todos os conceitos vistos nos componentes tipo classes, só precisamos adaptá-los aos componentes funcionais, você já sabe tudo o que é necessário. Sendo assim, só será necessário conhecer os hooks, o que veremos a seguir.
*/
