"use client"; // Not sure what this line is intended for, it's not standard JavaScript or React syntax.
import { useState } from "react";
// Define a functional component named Home
const Home = () => {
// const [userName, setUserName]=useState("");
// const [email, setEmail]=useState("");
// const [phone, setPhone]=useState("");

const [state, setState]= useState({
  userName: '',
  email: '',
  phone: '0'
})

  // Define a function that handles the onChange event of the input field
  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

// const onChangeEmailHandler=(e)=>{
// setEmail(e.target.value)
// }
// const onChangePhoneHandler=(e)=>{
// setPhone(e.target.value)
// }
  // Render a div containing an input field
  return (
    <div>
      {/* Input field with an onChange event listener */}
      <input name="userName" onChange={onChangeHandler} type="text" placeholder="Enter your name"/>
      <input name="email" onChange={onChangeHandler} type="email" placeholder="Enter your Email"/>
      <input name="phone" onChange={onChangeHandler} type="number" placeholder="Enter your Phone no"/>
      <hr />
      <p>UserName is : {state.userName}</p>
      <p>Email is : {state.email}</p>
      <p>Phone is : {state.phone}</p>
    </div>
  );
}

// Export the Home component to be used elsewhere in the application
export default Home;

