import {useState} from 'react'
import {FaTimes} from "react-icons/fa"

const Resenia = ({resenia, deleteResenia }) => {
    //Definir estados iniciales 
    const [rating, setReating]=useState(resenia.rating)
    const [comment, setComment]=useState(resenia.text)
    //Cambiar el estado del rating
    const addNota=()=>{
        setReating((prev)=>{
            return prev + 1
        })
    }
    const restNota=()=>{
        setReating((prev)=>{
            return prev - 1
        })
    }
    return (
        
        <div className="card">
            <div className="num-display">
                {rating}
            </div>
            <div className="text-display">
                {comment}
            </div>
            <button onClick={ addNota }>
                Cambiar Nota 
            </button>
            <br/>
            <button onClick={() =>deleteResenia(resenia.id)} className='close'>
                <FaTimes/>
            </button>
        </div>
    )
}
export default Resenia