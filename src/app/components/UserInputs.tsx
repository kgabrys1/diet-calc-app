import Input from "./Input"
import UserData from "../models/UserData"
import { UNITS } from "../util/Helper"


interface UserInputsProps {
    onChange: (inputId: string, newValue: string) => void,
    userInput: UserData
}

export default function UserInputs({ onChange, userInput }: UserInputsProps) {
    return (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <Input id="gender" type="radio" value={userInput.gender} unit="" onChange={onChange}>Gender</Input>
            <Input id="age" type="number" value={userInput.age} unit={UNITS.timeUnit} onChange={onChange}>Age</Input>
            <Input id="height" type="number" value={userInput.height} unit={UNITS.heightUnit} onChange={onChange}>Height</Input>
            <Input id="weight" type="number" value={userInput.weight} unit={UNITS.massUnit} onChange={onChange}>Weight</Input>
            <Input id="pal" type="number" value={userInput.pal} unit="" onChange={onChange}>PAL</Input>
            <Input id="targetWeight" type="number" value={userInput.targetWeight} unit={UNITS.massUnit} onChange={onChange}>Target Weight</Input>
            <Input id="startDate" type="date" value={userInput.startDate} unit="" onChange={onChange}>Start Date</Input>
        </div>
    )
}