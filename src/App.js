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
    // 
    return(
        <div className="container">
            <ReseniaList listaresenias={lista_resenias}  />
        </div>
    )
}
export default App