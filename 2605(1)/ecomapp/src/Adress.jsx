export default function Address(props){
   const{name,city,age,State,pin} = props;
    
    return (
        <div>
        <h1>{name}</h1>
        
        <h2>{city}</h2>
        <h2>{age}</h2>
        <h2>{State}</h2>
        <h1>{pin}</h1>
        </div>
    )
}