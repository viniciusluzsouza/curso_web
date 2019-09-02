import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        // this apontando para o componente atual (this fixo)
        this.setTipo = this.setTipo.bind(this)
        // this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        // let i = 1
        // setInterval(() => {
        //     this.setState({ tipo: ++i })
        // }, 1000)
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        // operador destructuring tirando tipo e nome de props
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..."
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e =>this.setNome(e)} />
            </div>
        )
    }
}