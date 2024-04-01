"use client"

import { useState } from "react"
import axios from 'axios';
const Home = () => {
  const userNames = ["Muneer", "Saifi", "Asad", "Saim"]
  const [data, setData]= useState({})
  const [students, setStudents] = useState([
    {
      stdName: "Muneer",
      rollNo: 21355,
      section: "D"
    },
    {
      stdName: "Saif",
      rollNo: 255,
      section: "C"
    },
    {
      stdName: "Saim",
      rollNo: 534,
      section: "F"
    }
  ])

  const deleteHandler = (studentRollNo) => {
    console.log(studentRollNo);
    let restStudents = students.filter((student) => {
      if (student.rollNo !== studentRollNo) {
        return student
      }
    })
    //  console.log(restStudents);
    setStudents(restStudents)
    console.log(students);
  }
  const loadDataFromServer = async () => {
    // let response = await fetch("https://api.github.com/users/naveed-rana", {
    //   method: "GET"
    // })
    // response= await response.json()
    let response = await axios.get('https://api.github.com/users/naveed-rana');
    setData(response.data);
    console.log("response", response.data);
  }
  return (
    <>
    <div className={true ? 'red' : 'black'}>
      {data && (
        <div>
          Follower login - {data.login}
        </div>
      )}

      <div>
        <button onClick={loadDataFromServer}>Load Data</button>

        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Student Name</th>
              <th>Student Roll No</th>
              <th>Student Section</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{student.stdName}</td>
                <td>{student.rollNo}</td>
                <td>{student.section}</td>
                <td><button onClick={() => deleteHandler(student.rollNo)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
  )
}

export default Home

