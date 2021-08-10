//>> HOOK de EFEITOS (efeito colateral) <<   (equivalente ao ciclo de vida dos domponentes tipo objeto)

/* Na programação funcional, tudo o que acontece fora da função é "efeito colateral".

*/

//useEffect() pode ter até 2 parâmetros: o primeiro é uma função de callback, o segundo é um array:

// PRIMEIRO PARÂMETRO: a função de callback: Diz o que queremos fazer. Neste caso, MONITORA as variáveis do vetor. Será executada quando iniciamos o componente (carregamos a página) && quando alguma variável do vetor sofrer alteração(simula o comportamento de ciclo de vida).

// SEGUNDO PARÂMETRO: o array: variáveis a serem monitoradas.

import React, {useState, useEffect} from "react";

function Nome4(){
    const [nome, setNome] = useState('(inspecionar)');
    useEffect(
        ()=> console.log('Efeito: ', nome), [nome]  //Pelo console vemos que esta função de callback do useEffect foi executada quando o componenete foi construído no navegador (semlhante ao componnent didmount, em componentes tipo classe.)
        
    );

    return (
        <>
            Nome: <input type="text" value={nome} onChange={(evt) => setNome(evt.target.value)} />
            <p>Olá {nome}</p> 
        </>
    )
}



//pegar a informação antes de renderizar o componente: IF

function Nome5(){
    const [nome, setNome] = useState(undefined);
    useEffect(
        ()=> {
            if (nome === undefined) {
                setNome(sessionStorage.getItem('nome') || '');    //se nome for undefined ou '', o setNome vai pegar o valor que será salvo nos cookies, quando ele for alterado.
            } else {
                sessionStorage.setItem('nome', nome);  //salva as alterações de nome nos cookies (a cada letra digitada)
            }
        }, [nome]
        
    );

    return (
        <>
            Nome: <input type="text" value={nome} onChange={(evt) => setNome(evt.target.value)} />
            <p>Olá {nome}</p> 
        </>
    )
}


export {Nome4, Nome5};

/*
Componentes Funcionais com Efeitos (Ciclo de Vida)


Dissemos que o ciclo de vida dos componentes tipo classe são utilizados para fazer "efeitos colaterais" (side effects), que é o nome que programadores funcionais dão para qualquer operação que seja feita fora de nossa função, por exemplo, consultas/alterações em bancos de dados ou chamadas em APIs.

Essa palavra é importante pois o hook que usamos para isso em componentes funcionais é chamado de useEffect. Esse é um hook bem mais complexo que useState que vimos anteriormente.

O useEffect é uma função que recebe dois parâmetros, o primeiro é uma função de callback que rodará e produzirá o nosso efeito, em outras palavras, é o que queremos fazer. O segundo é um vetor, nesse vetor colocamos o nome de variáveis que serão monitoradas pelo effect, caso essas variáveis mudem de valor o effect rodará novamente.

As funções de callback passadas para o useEffect podem opcionalmente retornar uma outra função. Essa função seria usada para fazer uma limpeza do que foi feito pelo effect. Por exemplo, de fizemos uma consulta ao banco de dados, podemos usar essa função para fechar a conexão.

Efeitos rodam imediatamente na montagem do componente, mas também rodam novamente todas as vezes que o componente fizer update. Por isso, geralmente trabalhamos com o vetor de variáveis e condicionais para garantir que ele não rode mais vezes do que o desejado.

Muito cuidado com efeitos que manipulam o estado, pois isso gera um update e consequentemente roda o efeito novamente. Se não restringirmos esse comportamento podemos fazer um laço infinito de atualizações que fará com que nosso componente não renderize.

Vamos começar usando o componente da lição passada e adicionar um effect nele que faz console.log do nome.

Observe que ele faz um log imediatamente quando o componente monta com o nome vazio.

Depois ele roda todas as vezes que o nome é alterado, letra a letra.

Observe que não passamos um array para o effect, isso quer dizer que ele vai rodar toda vez que qualquer estado for alterado.

Agora, vamos modificar o useEffect para adicionar o parâmetro que falta. Vamos passar um array vazio:


useEffect(() => {
    console.log('Effect: ', nome);
}, []);


Observe que agora nosso efeito rodou apenas uma vez na montagem do componente.

Ele não roda mais quando o nome é alterado porque não dissemos que ele deve monitorar o estado do nome.

O array vazio representa que esse efeito não deve monitorar nenhum estado no componente.

Se passarmos o nome nesse array, ele monitorará apenas o estado do nome, não rodando na alteração de outros estados.


useEffect(() => {
    console.log('Effect: ', nome);
}, [nome]);


Sendo assim podemos criar uma lógica que faça o effect ler o nome do sessionStorage quando rodar pela primeira vez, e depois monitorar o nome e gravar no sessionStorage o novo valor quando ele for alterado...

Configuramos nosso efeito para rodar no início (como sempre) e a cada mudança do estado do nome (passado no array de dependências).

Quando começamos, o nome estará como undefined então pudemos usar um if para verificar se ele está com esse valor e se estiver tentamos ler o valor do sessionStorage usamos || "" como fallback caso não exista valor no sessionStorage também.

Se o efeito cair no else, isso quer dizer que o nome foi alterado, como não há nada que o usuário possa fazer para fazer o nome ficar undefined novamente essa técnica é razoavelmente segura.

No else, persistimos a alteração do nome no sessionStorage observe que ao escrever no campo o valor do H1 muda como antes, mas que se você recarregar a página o último valor continua preenchido!

Com isso chegamos ao final. Agora você pode fazer com um componente funcional tudo o que os componentes tipo classe podiam fazer e de forma mais concisa e enxuta.
*/