import React from "react";

type AccordeonPropsType = {
    titleValue: string
    collapsed?:boolean
    items:Array<string>
}

type AccordeonBodyPropsType = {

    items:Array<string>
}

export function Accordeon(props:AccordeonPropsType) {

        return (
            <div>
                <AccordeonTitle title={props.titleValue}/>
                {!props.collapsed  && <AccordeonBody items={props.items}/>}
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
function AccordeonBody(props:AccordeonBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map( i => <li>{i}</li>)}
            </ul>
        </div>
    )
}