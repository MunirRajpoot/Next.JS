"use client"

import { useState, useEffect } from "react";
import { getDocs, collection, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

const Home = () => {
  const [students, setStudents] = useState([]);

  const [id, setId] = useState("")

  const [loading, setLoading] = useState(false)

  const fetchDocs = async () => {
    try {
      const collectionName = collection(db, "abc");
      // const queryRef = query(collectionName, where("email", "==", "abc@gmail.com"))
      const docs = await getDocs(collectionName);
      const studentsData = [];
      docs.forEach((doc) => {
        studentsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setStudents(studentsData);
      console.log("students", students);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const onDeleteHandler = async (id) => {
    try {

      setId(id)
      setLoading(true)
      const docRef = doc(db, "abc", id);
      await deleteDoc(docRef);
      const newStudents = students.filter((student) => student.id !== id);
      setLoading(false)
      setStudents(newStudents);
    } catch (error) {
      console.log("error deleting document", error);
    }
  };



  const onUpdateHandler = async (id) => {
    try {

      const docRef = doc(db, "abc", id)
      setId(id)
      setLoading(true)
      await updateDoc(docRef, {
        email: "muneer@gmail.com"
      })
      fetchDocs();
      setLoading(false)
    } catch (error) {

    }
  }

  return (
    <div>
      <h1>List of Students</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>Student Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td><button onClick={() => onDeleteHandler(student.id)}>{student.id == id && loading ? "Loading..." : "delete"}</button></td>
              <td><button onClick={() => onUpdateHandler(student.id)}>{student.id == id && loading ? "Loading..." : "update"}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
