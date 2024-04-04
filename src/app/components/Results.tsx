import Result from "./Result"
import UserData from "../models/UserData"
import { calculateResults, UNITS } from "../util/Helper"
import { CI_TOOLTIP } from "../util/TooltipText"


interface ResultsProps {
    userData: UserData
}

export default function Results({ userData }: Readonly<ResultsProps>) {
    const calorieResults = calculateResults(userData)
    return (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <Result id="bmr" value={calorieResults.bmr} unit={UNITS.caloriesUnit}>Basal Metabolic Rate (BMR)</Result>
            <Result id="tee" value={calorieResults.tee} unit={UNITS.caloriesUnit}>Total Energy Expenditure (TEE)</Result>
            <Result id="ci" value={calorieResults.ci } tooltipText={CI_TOOLTIP} unit={UNITS.caloriesUnit}>Suggested daily calorie intake (CI)</Result>
            <Result id="cd" value={calorieResults.cd} unit={UNITS.caloriesUnit}>Target daily calorie deficit (CD)</Result>
            <Result id="cb" value={calorieResults.cb} unit={UNITS.caloriesUnit}>Suggested daily calories burned during activities (CB)</Result>
            <Result id="cid" value={calorieResults.cid} unit={UNITS.caloriesUnit}>Maximum daily calorie intake deficit (CID)</Result>
            <Result id="weeks" value={calorieResults.weeks}>Number of weeks to achieve target weight</Result>
            <Result id="endDate" value={calorieResults.endDate}>Calculated reduction end date</Result>
        </div>
    )
}