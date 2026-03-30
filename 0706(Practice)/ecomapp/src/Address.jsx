export default function Address(props){
    const name = props.name;
    const city = props.city;

    return(
        <div>
            <h2>{name}</h2>
            <h2>{city}</h2>
        </div>
    )

}