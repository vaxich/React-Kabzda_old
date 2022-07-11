import React, { useState } from "react"

export default {
    title: "UseState.memo demo"
}

function  generateData() {
    console.log("generateData")
    return 1
}

const Example1 =() => {
    const [counter, setCounter] = useState(generateData);

    return <>
    <button onClick={ () => setCounter(counter+1)}>+</button>
        {counter}
    
    </>
}