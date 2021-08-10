import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './componentes/App1';
import App2 from './componentes/App2';    //Todos os arquivos com componentes são referenciados aqui.
import App3 from './componentes/App3';
import App4 from './componentes/App4';
import App5 from './componentes/App5';
import App6 from './componentes/App6';
import App7 from './componentes/App7';
import Lista1 from './componentes/Lista1';
import Lista2 from './componentes/Lista2';
import {Lista3, Item} from './componentes/Lista3';   //classe e subclasse são importados
import Meuformulario from './componentes/Meuformulario';
import {Hello1, Hello2, Hello3, Hello4, Hello5, Hello6} from './componentes/Xfuncionais';
import {Nome1, Nome2, Pessoa, Nome3} from './componentes/Yhookstate';
import {Nome4, Nome5} from './componentes/Zhookefeitos';
import reportWebVitals from './reportWebVitals';


//Demos os nomes dos nossos componentes de App

ReactDOM.render(
  <React.StrictMode>

    <h1>COMPONENTES TIPO CLASSE</h1>

    <App1 />    {/*O conteúdo do primeiro componente é estatico, ou seja, está dentro do prório componente.*/}

    <App2 titulo='Minha primeira...' texto='PROPS!'>
      <br />   {/*pula uma linha*/}
      Eu sou um children! Qualquer coisa que você colocar entre a abertura e o fechamento das tags do componente serão passados como props.children para o componente! Isso inclui HTML, outros componentes, e até javascript, contanto que esteja entre chaves. Childrens <strong>aceitam</strong> tags HTML. 
      {/*Tudo o que está ente <App2> e </App2> é Children*/}
    </App2>

    <br />

    <App2 titulo='Reutilizando o App2: como se trata de um componente dinâmco, App2 é reutilizável, inclusive em outros projetos' />

    <br />

    <App4 />  {/*Estado (campo do nome)*/}

    <br />

    <App5 />  {/*Estado (campo do nome2 - com if/else)*/}

    <br />

    <App6 />  {/*Estado (campo do nome3 - com funções e operador ternário)*/}

    <br />

    <App7 />  {/*Estado (campo nome4 - com armazenamento de dados)*/}

    <br />

    <App3 titulojsx='CONSIDERAÇÕES SOBRE JSX:'><br />
      O dialeto (não é uma linguagem) JSX é uma extensão da sintaxe para JavaScript que pode misturar HTML com JavaScript(desde que o JS produza um retorno, como no caso da data). No React, o JSX produz "elementos" a serem renderizados. Exemplo de uma sintaxe JSX:
      const elemento = <strong>Olá, mundo!</strong>;

      Incorporando expressões em JSX:
      Para usar JS dentro de uma expressão JSX, utilizar chaves {}: {'2 + 2 é igual a'} {2+2} .

      Depois da compilação, as expressões em JSX se transformam em chamadas normais de funções que retornam objetos JavaScript.

      Isto significa que você pode usar JSX dentro de condições if e laços for, atribuí-lo a variáveis, aceitá-lo como argumentos e retorná-los de funções.
    </App3>

    <Lista1 /> {/* Lista modo1*/}

    <Lista2 />  {/* Lista modo2, bom subclasse*/}

    <Lista3>    {/* Componentes Aninhados*/}
                {/* As props utilizadas são refeentes a taxação (completo) e ao id*/}
        Texto que pode ser filtrado.
      <Item key={999} id={999} completo={false}>
        Teste1
      </Item>
      <Item key={998} id={998} completo={true}>
        Teste2
      </Item>
      
    </Lista3 >

    
    <Meuformulario />

    <h1>COMPONENTES FUNCIONAIS</h1>

    <Hello1 />     {/* Conteúdo estático (sem props) */}

    <Hello2 texto="Olá 2"></Hello2>   {/* Conteúdo definido como atributo (texto) */}
     
    <Hello3>
      <p>Olá 3</p>      {/* Conteúdo definido como children */}
    </Hello3>

    <Hello4>
      <p>Olá 4</p>      
    </Hello4>

    <Hello5 texto="Olá 5"></Hello5>

    <Hello6 texto="Olá 6"></Hello6>

    <Nome1 />

    <Nome2 />

    <Pessoa />

    <Nome3 />

    <Nome4 />

    <Nome5 />

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

