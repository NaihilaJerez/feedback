import React, { Component } from 'react'
import Resenia from './Resenia'
const ReseniaList =( {listaresenias} )=> {
    console.log(listaresenias)
   
        if (!listaresenias || listaresenias.legenth===0) {
            return <p>ñlistaaa no se Jjajajajaj </p>
        } else {
            return (
                //condicioanlen caso de que no llegue el arreglo
              <div className="feedback-list">
                         {/* recorrer la lista de resenias  */}
                {listaresenias.map((resenia)=>(
                    <Resenia 
                    key={resenia.id}
                    resenia={resenia}/>
                ))}
                </div>
            )
        }
  }
export default ReseniaList