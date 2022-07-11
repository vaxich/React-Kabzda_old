import React, {useEffect, useState} from "react"

export default {
    title: "UseEffect.memo demo"
}


const SimpleExample =() => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample")

    useEffect( ()=> {
        console.log("useEffect при каждом рендере")
        document.title = counter.toString()
    })
    useEffect( ()=> {
        console.log("useEffect при первом рендере")
        document.title = counter.toString()
    }, [])
    useEffect( ()=> {
        console.log("useEffect при изменении counter")
        document.title = counter.toString()
    }, [counter])

    return <>
        hello,   {counter}
    <button onClick={ () => setFake(fake+1)}>fake+</button>
    <button onClick={ () => setCounter(counter+1)}>counter+</button>

    
    </>
}