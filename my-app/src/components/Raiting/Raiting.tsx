import React from "react";

export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RaitingPropsType ={
    value: RaitingValueType
    onClick: (value:RaitingValueType) => void
}

type StarPropsType = {
    selected: boolean
    onClick:(value:RaitingValueType) => void
    value: RaitingValueType
}

export function Rating(props:RaitingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value = {1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value = {2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value = {3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value = {4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value = {5}/>

        </div>
    )




}

function Star(props:StarPropsType) {
    return <span onClick={ ()=> {props.onClick(props.value)}}> {props.selected ? <b>Star </b> : "Star"}</span>



}