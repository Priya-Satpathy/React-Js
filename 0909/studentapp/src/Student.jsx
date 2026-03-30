export default function Student(){
    let name = "Ram Roy";
    let gender = "Male";
    let age = 17;
    let isVoting = false;
    let height = 5.3;
    return(
        <>
        <h1>Name:{name}</h1>
        <h1>Gender:{gender}</h1>
        <h1>Age:{age}</h1>
        <h1>Voting Eligiblity:{isVoting}</h1>
        <h1>Height:{height}</h1>
        </>
    )
}