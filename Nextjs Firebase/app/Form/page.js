"use client";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

const Form = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    const onSubmitHandler = async () => {
        const student = {
            name: userName,
            email,
            course,
        };

        try {
            const collectionRef = collection(db, "abc");
            await addDoc(collectionRef, student);
            console.log("Document written with ID: ");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div>
            <h1>Registration Form</h1>

            <input
                type="text"
                placeholder="Enter your name:"
                onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <br />

            <input
                type="email"
                placeholder="Enter your email:"
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />

            <input
                type="text"
                placeholder="Enter your Course:"
                onChange={(e) => setCourse(e.target.value)}
            />
            <br />
            <br />

            <button onClick={onSubmitHandler}>Submit</button>
        </div>
    );
};

export default Form;
