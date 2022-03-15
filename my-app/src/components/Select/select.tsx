import React, {KeyboardEvent, MouseEventHandler, useState} from 'react';
import styles from "./Select.module.css";

type ItemsType = {
    value: any,
    title: string
}

type SelectPropsType = {
    value?: any
    onChange:(value:any) => void
    items:ItemsType[]
}

export function Select(props:SelectPropsType) {
    const[active, setActive] = useState(false);
    const[hoveredElement, setHoveredElement] = useState(props.value);

    const toggleItems =() => {
        setActive(!active)
    }

    const selectItems = props.items.find(i => i.value === props.value);
    const hoveredItems = props.items.find(i => i.value === hoveredElement);

    const onItemClick =(value:MouseEventHandler<HTMLDivElement>) => {
        props.onChange(value); toggleItems()
    }

    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let k = 0; k < props.items.length; k++  )
            {
                if (props.items[k].value === hoveredItems) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[k + 1] : props.items[k - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break;
                    }

                }
            }
        }
        }

    }


    return (
        <div >

            <div className={styles.select} onKeyUp={ onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}> {selectItems && selectItems.title}</span>
                { active &&
                    <div className={styles.items + " " + (active ? styles.active : "")}>
                        {props.items.map(i => <div className={styles.item + " " + (hoveredItems === i ? styles.selected : "")}
                                                   key={i.value}
                                                   onMouseEnter={ ()=> {setHoveredElement(i.value)}}
                                                   onClick={ () => onItemClick(i.value)}>
                                            {i.title}</div>)}
                    </div>
                }

            </div>

        </div>
    )

}