import React from 'react'
// import React, { Fragment } from 'react'

export default props => [
    <h1 key='h1'>Bom Dia {props.nome}!</h1>,
    <h2 key='h2'>Até Breve!</h2>
]


// React.Fragment => poderia ser uma div,
// mas utiliza-se esse parâmetro quando não se deseja adicionar uma div

// esse é o mais utilizado, normalmente com div
// export default props =>
//     <React.Fragment>
//         <h1>Bom Dia {props.nome}!</h1>
//         <h2>Até Breve!</h2>
//     </React.Fragment>

// export default props =>
//     <div>
//         <h1>Bom Dia {props.nome}!</h1>
//         <h2>Até Breve!</h2>
//     </div>