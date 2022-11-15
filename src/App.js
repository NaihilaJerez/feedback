const App = () =>{
    const bootcamps =[
        {
        id:1 , 
        name: 'PHP Bootcamps', 
        average_rating: 8
        }, 
        {
        id:1 , 
        name: 'Java-Script Bootcamps', 
        average_rating: 10
        }
    ]
    return(
        <div>
        <h1>El componente App soy YOOO</h1>
        <ul>
            {bootcamps.map((bootcamp, index)=>(
                <li key={index}>{bootcamp.name}</li>
            ))}
        </ul>
        </div>
    )
}
export default App