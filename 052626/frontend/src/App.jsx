import React from 'react'
import StudentInfo from './StudentInfo'

const App = () => {
  const stud = [ 101,
    "Ram",
    23
  ];
  return (
    <>
      <StudentInfo stud = {stud} />
    </>
  )
}

export default App