"use client"
import { useState } from "react"
import { useEffect } from "react"


// dbConnect()

// const fetchData = async () => {
//     try {
//         const data = await userModel.find();
//         console.log("data", data);
//         return data;
//     } catch (error) {
//         console.log("error", error);
//     }
// }

const page = () => {

    const [data, setData] = useState([])

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:3000/api/profiles");
        const result = await response.json()
        console.log("result", result);
        setData(result.users)
    }
    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <div>
            <h1>Contact Page</h1>
            {data?.map((item, index) => {
                return (
                    <div key={index}>
                        {item.firstName} - {item.lastName}
                    </div>
                )
            })}
        </div>
    )
}

export default page;

