import React, {useMemo, useState} from 'react'

export default {
    title:'useMemo'
}


export const DifficuCounting = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo( () => {
        let tempResultA = 1
        for (let i=1; i<=a; i++) {
            let fake = 0;
            while(fake <1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i

        }
        return tempResultA
    }, [a])


    for (let i=1; i<=b; i++) {
        resultB = resultB * i;
    }

    return<>
        <input value={a} onChange={ (e)=> setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={ (e)=> setB(+e.currentTarget.value)}/>

        <hr />
        <div>
            result for a: {resultA}
        </div>
        <div>
            result for b: {resultB}
        </div>
    </>
}




// const UsersSecret =(props:{users:Array<string>}) => {
//     return <div>
//         {props.users.map( (u,i) => <div key={i}>{u}</div>  )}
//     </div>
// }
//
// const Users = React.memo(UsersSecret);
//
// export const HelpsReactMemo =() => {
//     const [counter, setCounter] = useState(0);
//     const [users, setUsers] = useState(["Pavel", "Dimich", "Valera"]);
//
//
//     return <>
//         <button onClick={ () => setCounter(counter+1)}>+</button>
//         {counter}
//         <Users users={users }/>
//
//     </>
// }
export const LikeUseCallBack =() => {
    console.log("LikeUseCallBack")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["react", "Css", "JS"]);

        const NewArray = useMemo( () => {
            const NewArray = books.filter( u  => u.toLowerCase().indexOf("a") > -1)
            return NewArray
        }, [books])
    
    const addBook = () => {
            const newUsers = [...books, "Angular" + new Date().getTime()]
        setBooks(newUsers)
    }

    return <>
        <button onClick={ () => setCounter(counter+1)}>+</button>

        {counter}
        <Book books={NewArray } addBook={addBook}/>

    </>
}

type BooksSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("bookSecret")
    return <div>
        <button onClick={ () => props.addBook()}>ad book</button>
        {props.books.map( (book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Book = React.memo(BooksSecret)