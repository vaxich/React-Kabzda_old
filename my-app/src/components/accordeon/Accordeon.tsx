import React from "react";

type AccordeonPropsType = {
    titleValue: string
    collapsed?:boolean
}

export function Accordeon(props:AccordeonPropsType) {

        return (
            <div>
                <AccordeonTitle title={props.titleValue}/>
                {!props.collapsed  && <AccordeonBody />}
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