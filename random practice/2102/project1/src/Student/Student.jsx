import { useState } from "react"

function StudentForm() {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  })

  function handleChange(e) {
    const { name, value } = e.target

    setStudent(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(student)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={student.course}
        onChange={handleChange}
      />

      <button type="submit">Add Student</button>
    </form>
  )
}

export default StudentForm