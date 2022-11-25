//DEPENDENCIAS 
import {useState} from 'react';
//DATA
import Resenias from "./Data/Resenias";
//COMPONENTES 
import Resenia from "./Componentes/Resenia";
import ReseniaList from './Componentes/ReseniaList';
function App (){
    //crear estado para las resenias
    const [lista_resenias, setListarResenias] = useState(Resenias)
    // metodo para borrar una reseña 
    const deleteResenia = (id) =>{
        window.confirm("estas seguro de que quieres borrar")
    }
    return(
        <div className="container">
            <ReseniaList
            deleteResenia={deleteResenia}
            listaresenias={lista_resenias}  />
        </div>
    )
}
export default App