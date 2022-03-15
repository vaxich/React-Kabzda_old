import React, {ChangeEvent, useState} from "react";

type InputCheckboxType = {

}

export const ControledInput = () => {
    const [parentValue, setParentValue] = useState<any>("");

    const onChanged =(e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return  <input value={parentValue} onChange= {onChanged} />
}


export const ControledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true);

    const onChanged =(e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return  <input type="checkbox" checked={parentValue} onChange= {onChanged} />
}

export const ControledSelect = () => {
    const [parentValue, setParentValue] = useState<undefined | string>(undefined);

    const onChanged =(e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return  <select value={parentValue} onChange={onChanged}>
        <option value={"1"}>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>

    </select>
}