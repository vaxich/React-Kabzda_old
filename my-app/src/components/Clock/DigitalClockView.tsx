import {ClockViewPropsType} from "./Clock";

export const get2DigitalToString=(number: number) => number < 10
    ? "0" + number
    : number

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2DigitalToString(date.getHours())}</span>
        :
        <span>{get2DigitalToString(date.getMinutes())}</span>
        :
        <span>{get2DigitalToString(date.getSeconds())}</span>
    </>
}