import React, {useReducer, useState} from "react";

type UnControledAccordeonPropsType = {
    titleValue: string
    collapsed?:boolean
}
type AccordeonTitlePropsType = {
    title: string
    onClick:any
}
type ActionType = {
    type:string
}

const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

const reducer = (state:any, action:ActionType) => {
    switch(action.type) {
        case TOGGLE_COLLAPSED:
            return !state;
        default:
            throw new Error ("bad action type")    
    }
        return state;
}



export function UnControledAccordeon(props:UnControledAccordeonPropsType) {

    //let [collapsed, setCollapsed] = useState(true)
    let [collapsed, dispatch] = useReducer(reducer, false)



        return (
            <div>
                {/* <AccordeonTitle title={props.titleValue} onClick={ ()=> { setCollapsed(!collapsed)}/> */}
                  <AccordeonTitle title={props.titleValue} onClick={ dispatch({type:TOGGLE_COLLAPSED})}/>
                {!collapsed  && <AccordeonBody />}
            </div>
        )



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