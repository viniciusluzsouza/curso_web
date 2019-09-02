import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'

// const elemento = <h1>React</h1>
// ReactDOM.render(elemento, document.getElementById('root'))

// import Multi, { BoaNoite } from './componentes/Multiplos'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>

    </div>
    , document.getElementById('root'))