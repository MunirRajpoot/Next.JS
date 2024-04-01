'use client'
import { useState } from "react"
const Count = () => {
    const [count, setCount] = useState(0)
    const increamentHandler = () => {
        setCount(count + 1);
    }
    const decreamentHandler = () => {
        setCount(count -1);

    }
    const resetHandler = () => {
        setCount(0);

    }
    return (
        <>
            <button onClick={decreamentHandler}>-</button>
            <span>{count}</span>
            <button onClick={increamentHandler}>+</button>

            {count !=0 && <button onClick={resetHandler}>Reset</button>}
        </>
    )
}

export default Count
