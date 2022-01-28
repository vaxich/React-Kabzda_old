import React from 'react';

import './App.css';
import {Accordeon} from "./components/accordeon/Accordeon";
import {Rating} from "./components/Raiting/Raiting";

function App() {
    // делает что-то полезное

    // обязана вернуть JSX
    return (
        <div>
            {/*<PageTitle title={"This is APP component"} />*/}
            {/*<PageTitle title={"My friends"} />*/}
            {/*<Rating value = {3}/>*/}
            <Accordeon titleValue={"Menu"} collapsed={true}/>
            <Accordeon titleValue={"Users"} collapsed={false}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    return (
        <div>{props.title}</div>
    )
}



export default App;
