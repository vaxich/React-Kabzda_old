import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from "./components/Clock/Clock";
import {Accordeon} from "./components/accordeon/Accordeon";
import {UnControledAccordeon} from "./components/accordeon/UnControledAccordeon";


let itemsForAccordeon = {
    titleValue: "Аккордеон",
    collapsed : false,
    items: ["privet", "medved", "krasavcheg"]
}

function App() {
    return (
        <div>
            <Accordeon titleValue={itemsForAccordeon.titleValue} collapsed={itemsForAccordeon.collapsed} items={itemsForAccordeon.items} />
            {/*<UnControledAccordeon titleValue={"не контролируемый акекордеон"} collapsed={true}/>*/}
            <Clock mode={"analog"}/>
        </div>

    )
        ;
}

export default App;
