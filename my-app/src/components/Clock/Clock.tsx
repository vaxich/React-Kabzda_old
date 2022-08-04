import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


export type PropsType = {
    mode? : "digital" | "analog"
}
export type ClockViewPropsType = {
    date: Date
}


 const Clock: React.FC<PropsType> = (props: PropsType) => {
    const [date, setDate] = useState(new Date);

    useEffect( ()=> {
        setInterval( () => {
            setDate(new Date)
        }, 1000);
    }, [])

    //  let view;
    //
    // switch (props.mode) {
    //     case "analog":
    //         view = <AnalogClockView date={date}/>
    //         break;
    //     case "digital":
    //     default:
    //         view = <DigitalClockView date={date}/>
    //
    // }

    return (
        <>
            {/*{view}*/}
            <DigitalClockView date={date} />
            <AnalogClockView date={date} />
        </>

        )


}

export default Clock