//>>FORMULÁRIO<<//
/*
Vamos fazer um código com vários exemplos de campos para processar um formulário. O nosso formulário terá um campo de texto para o nome, um select para escolher a linguagem de programação preferida dada as opções, um campo radio de marcação única se o usuário é programador ou estudante, um checkbox se o usuário dedica 8h semanais aos estudos e por fim uma área de texto para uma bio do usuário.

Já sabemos fazer um input textual de exemplos anterior, então começamos adicionando a tag form e com o atributo onSubmit, que recebe uma função a ser executada quando o formulário for submetido.
*/


import React from "react";

class Meuformulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: '', linguagem: 'JavaScript', tipo: 'Programador', dedico: true, bio: ''};

        this.handleSubmit = (event) => {
            event.preventDefault();  //impede o comportamento padrão deste evento (que é recarregar a página ao Submit)
            console.log(this.state);   //As informações (value) ficam dentro do estado.
        }

        this.changeName = (event) => {
            this.setState({nome: event.target.value})
        }

        this.changeSelect = (event) => {
            this.setState({linguagem: event.target.value})
        }

        this.changeRadio = (event) => {
            this.setState({tipo: event.target.value})
        }

        this.changeCheckbox = (event) => {
            this.setState({dedico: event.target.checked})
        }

        this.changeBio = (event) => {
            this.setState({bio: event.target.value})
        }
    }

    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit}> {/*O método entra como parâmetro da função do botão*/}
                    <label>
                        Nome: <input type="text" value={this.state.nome} onChange={this.changeName}></input>
                        {/*O valor recebe um estado, e o evento recebe um método*/}
                    </label>
                    <br /> 
                    <label>
                        Linguagem Favorita:
                        <select value={this.state.linguagem} onChange={this.changeSelect}>
                            <option>JavaScript</option>]
                            <option>Phyton</option>
                            <option>C++</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Sou:
                        <input type="radio" checked={this.state.tipo == 'programador'} value='programador' onChange={this.changeRadio}/> Programador
                        <input type="radio" checked={this.state.tipo == 'estudante'} value='estudante' onChange={this.changeRadio}/> Estudante
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" checked={this.state.dedico} onChange={this.changeCheckbox} /> Dedico 8h semanais aos estudos.
                    </label>
                    <br />
                    <label>
                        Bio: <br />
                        <textarea cols="50" type="text" value={this.state.bio} onChange={this.changeBio} />
                    </label>
                    <br />
                    <label>
                        <input type="submit" value="Enviar" />
                    </label>
                </form>
            </>
        )
    }
}

export default Meuformulario;

/*Observe que mesmo estando no contexto React o HTML tentará se comportar como HTML comum ao submeter o formulário. Para evitar esse comportamento, que gera o refresh da página, precisamos utilizar o método preventDefault de Event (ou nada será visto no console, porque ao mesmo tempo que salvar os dados, recarrega a pagina e os apaga.)

Para cada novo campo de input nós precisamos criar um método para processar as alterações do mesmo.

Vamos adicionar o input tipo select. No construtor adicionamos o método this.changeSelect.

Para o input tipo radio adicione no render. Para termos a marcação de uma única opção, o campo checked verifica a condição da opção marcada no estado, se for vendadeiro é renderizado como marcado.
No construtor adicionamos o método this.changeRadio.

Para o checkbox temos a mesma atenção ao campo checked. Agora atenção para o método this.changeCheckbox, diferente dos outros casos não veficamos o value desse tipo de input para alterar o valor do estado do componente mas sim o checked.

Por fim para a área de texto usamos a tag textarea. O método segue como os demais.

No exemplo, fizemos diversas mudanças no estado baseadas em eventos do tipo onChange, também "sequestramos" a submissão do formulário usando onSubmit.

Ele impede que o comportamento padrão do formulário aconteça e nos permite processar o formulário de acordo com o padrão usado no React. Esquecer de invocar esse método faz com que o formulário seja mandado para o servidor e a página recarregue.

Com isso concluímos nosso estudo pelo componentes feitos a partir de classes.
*/