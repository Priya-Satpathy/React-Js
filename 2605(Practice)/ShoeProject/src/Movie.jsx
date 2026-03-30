 function Movie(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.email}</h3>
            <h4>{props.release}</h4>
             <h5>{props.rating}</h5>
            <h5>{props.type}</h5>
            <h5>{props.description}</h5>

        </div>
        
    );
}
export default Movie