import Input from "./Input"
import UserData from "../models/UserData"


interface UserInputsProps {
    onChange: (inputId: string, newValue: string) => void,
    userInput: UserData
}

export default function UserInputs({ onChange, userInput }: UserInputsProps) {
    return (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <Input id="gender" type="radio" value={userInput.gender} onChange={onChange}>Gender</Input>
            <Input id="age" type="number" value={userInput.age} onChange={onChange}>Age</Input>
            <Input id="height" type="number" value={userInput.height} onChange={onChange}>Height</Input>
            <Input id="weight" type="number" value={userInput.weight} onChange={onChange}>Weight</Input>
            <Input id="pal" type="number" value={userInput.pal} onChange={onChange}>PAL</Input>
            <Input id="targetWeight" type="number" value={userInput.targetWeight} onChange={onChange}>Target Weight</Input>
            <Input id="startDate" type="date" value={userInput.startDate} onChange={onChange}>Start Date</Input>
        </div>
    )
}