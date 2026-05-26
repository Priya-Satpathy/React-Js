import React from 'react'

const StudentInfo = ({stud}) => {
   for(let i =0; i<3; i++){
    console.log(stud[i]);
    
   }
   console.log(stud);
   
  return (
    <div>
        <h1>Student Information</h1>
        <h1>Roll Number = {stud[0]}</h1>
        <h1>Name = {stud[1]} </h1>
         <h1>Age = {stud[0]} </h1>
     
    </div>
  )
}

export default StudentInfo