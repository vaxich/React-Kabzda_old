import {Select} from "./select";
import {action} from "@storybook/addon-actions";
import React, {useState} from 'react';

export default {

    title: "select",
    component: Select
}

export const WithValue = () => {

    const [value, setValue] = useState("2");
    return (
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: "1", title: "Moscow"},
                {value: "2", title: "Kiev"},
                {value: "3", title: "Minsk"},
            ]}
        />


    )
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: "1", title: "Moscow"},
                {value: "2", title: "Kiev"},
                {value: "3", title: "Minsk"},
            ]}
        />


    </>
}