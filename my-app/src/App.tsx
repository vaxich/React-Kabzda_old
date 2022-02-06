import React, {useState} from 'react';

import './App.css';
import {Accordeon} from "./components/accordeon/Accordeon";
import {RaitingValueType, Rating} from "./components/Raiting/Raiting";
import {OnOff} from "./components/On-Off/onOff";
import {UnControledAccordeon} from "./components/accordeon/UnControledAccordeon";
import {UnControledRating} from "./components/Raiting/UnControledRaiting";

function App() {
    // делает что-то полезное
    let [ratingValue, setRatingValue] = useState<RaitingValueType>(0)
    // обязана вернуть JSX
    return (
        <div>
            {/*<OnOff />*/}
            {/*<UnControledAccordeon titleValue={"Menu"}/>*/}
            {/*<Accordeon titleValue={"Users"} collapsed={false}/>*/}

            <Rating value = {ratingValue} onClick={setRatingValue}/>
            {/*<UnControledRating />*/}

            {/*<PageTitle title={"This is APP component"} />*/}
            {/*<PageTitle title={"My friends"} />*/}




            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}

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
