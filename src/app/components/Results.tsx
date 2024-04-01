import Result from "./Result"
import UserData from "../models/UserData"
import { calculateResults } from "../util/Helper"

interface ResultsProps {
    userData: UserData
}

export default function Results({ userData }: ResultsProps) {
    const calorieResults = calculateResults(userData)
    return (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <Result id="bmr" value={calorieResults.bmr}>Basal Metabolic Rate (BMR)</Result>
            <Result id="tee" value={calorieResults.tee}>Total Energy Expenditure (TEE)</Result>
            <Result id="ci" value={calorieResults.ci }>Suggested daily calorie intake (CI)</Result>
            <Result id="cd" value={calorieResults.cd}>Target daily calorie deficit (CD)</Result>
            <Result id="cb" value={calorieResults.cb}>Target daily calories burned (CB)</Result>
            <Result id="cid" value={calorieResults.cid}>Maximum daily calorie intake deficit (CID)</Result>
            <Result id="weeks" value={calorieResults.weeks}>Number of weeks to achieve target weight</Result>
            <Result id="endDate" value={calorieResults.endDate}>Reduction end date</Result>
        </div>
    )
}