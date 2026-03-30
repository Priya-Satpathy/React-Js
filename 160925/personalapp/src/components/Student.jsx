export default function StudentDetails({studentData}){
    const{roll, name , marks} = studentData;
    return(
       <div>
        <h1>Personal Details</h1>
            <p>Roll No :{roll}</p>
            <p>Name:{name}</p>
            <p>marks:{marks}</p>
                
        </div>
    );
       
}