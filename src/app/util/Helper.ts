import UserData from "../models/UserData"

export const CONSTANTS = {
    humanFatCalorificValue: 7740, // kcal/kg
    timeGranulation: 7, // days
    massLossFactor: -0.013, // body mass loss percentage
}

export const UNITS = {
    caloriesUnit: 'kcal',
    massUnit: 'kg',
    heightUnit: 'cm',
    timeUnit: 'years'
}

export function calculateResults({ gender, age, height, weight, pal, targetWeight, startDate }: UserData) {
    const bmr = 10 * weight + 6.25 * height - 5 * age + (gender === "M" ? 5 : -161)
    const tee = bmr * pal
    const targetWeeks = getTargetWeeks(weight, targetWeight, CONSTANTS.massLossFactor)
    const avgMassDiff = getAvgMassDiff(targetWeeks, weight)
    const cd = CONSTANTS.humanFatCalorificValue * avgMassDiff / CONSTANTS.timeGranulation
    const cid = bmr * (1 - pal)
    const cb = cid - cd
    return {
        bmr: round(bmr),
        tee: round(tee),
        ci: round(tee + cb + cd),
        cd: -round(cd),
        cid: -round(cid),
        cb: round(cb),
        weeks: targetWeeks,
        endDate: getEndDate(startDate, targetWeeks)
    }
}

export const round = (val: number, n: number = 0) => Math.round(val * Math.pow(10, n)) / Math.pow(10, n)

export const getEndDate = (dateStr: string, weeks: number) => {
    const date = new Date(dateStr)
    date.setDate(date.getDate() + 7 * weeks)
    return date.toLocaleDateString('en-GB')
}

export const getTargetWeeks = (weight: number, targetWeight: number, massLossFactor: number) => Math.round(-Math.log(weight / targetWeight) / massLossFactor)

const massReductionFunc = (weeks: number, weight: number) => CONSTANTS.massLossFactor * Math.pow(1 + CONSTANTS.massLossFactor, (weeks - 1)) * weight

function getAvgMassDiff(weeks: number, weight: number): number {
    let massDiffSum = 0
    for (let i = 1; i <= weeks; i++) {
        massDiffSum += massReductionFunc(i, weight + massDiffSum)
    }
    return massDiffSum / weeks
}