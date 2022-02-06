import React, {useState} from "react";

type UnControledAccordeonPropsType = {
    titleValue: string
    collapsed?:boolean
}

export function UnControledAccordeon(props:UnControledAccordeonPropsType) {

    let [collapsed, setCollapsed] = useState(true)
        return (
            <div>
                <AccordeonTitle title={props.titleValue}/>
                <button onClick={ ()=> {setCollapsed(!collapsed)} }>TOGGLE</button>
                {!collapsed  && <AccordeonBody />}
            </div>
        )



}

type AccordeonTitlePropsType = {
    title: string
}

function AccordeonTitle(props:AccordeonTitlePropsType) {
    return (
        <div>
            <h3>---{props.title}---</h3>
        </div>
    )
}
function AccordeonBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}