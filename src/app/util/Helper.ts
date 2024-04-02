import UserData from "../models/UserData"

export const CONSTANTS = {
    humanFatCalorificValue: 7740, // kcal/kg
    timeGranulation: 7, // days
    massLossFactorHigh: -0.015, // low body mass loss percentage
    massLossFactorMedium: -0.01, // medium body mass loss percentage
    massLossFactorLow: -0.005, // high body mass loss percentage
}

export const UNITS = {
    caloriesUnit: 'kcal',
    massUnit: 'kg',
    heightUnit: 'cm',
    timeUnit: 'years'
}

export function calculateResults({ gender, reductionIntensity, age, height, weight, pal, targetWeight, startDate }: UserData) {
    const bmr = 10 * weight + 6.25 * height - 5 * age + (gender === "M" ? 5 : -161)
    const tee = bmr * pal
    const cid = bmr * (1 - pal)

    const massLossFactor = getMassLossFactor(reductionIntensity)
    const targetWeeks = getTargetWeeks(weight, targetWeight, massLossFactor)
    const avgMassDiff = getAvgMassDiff(targetWeeks, weight, massLossFactor)
    const cd = CONSTANTS.humanFatCalorificValue * avgMassDiff / CONSTANTS.timeGranulation
    const baseCi =  tee + cd
    const ci = baseCi < bmr ? bmr : baseCi
    const cb = cid - cd
    return {
        bmr: round(bmr),
        tee: round(tee),
        ci: round(ci),
        cd: -round(cd),
        cid: -round(cid),
        cb: round(cb > 0 ? cb : 0),
        weeks: targetWeeks,
        endDate: getEndDate(startDate, targetWeeks)
    }
}

function getMassLossFactor(reductionIntensity: string): number {
    switch (reductionIntensity) {
        case "low": return CONSTANTS.massLossFactorLow
        case "med": return CONSTANTS.massLossFactorMedium
        case "high": return CONSTANTS.massLossFactorHigh
        default: throw new Error(`Unsupported reductionIntensity: [${reductionIntensity}]`)
    }
}

const getTargetWeeks = (weight: number, targetWeight: number, massLossFactor: number) => Math.round(-Math.log(weight / targetWeight) / massLossFactor)

const round = (val: number, n: number = 0) => Math.round(val * Math.pow(10, n)) / Math.pow(10, n)

const getEndDate = (dateStr: string, weeks: number) => {
    const date = new Date(dateStr)
    date.setDate(date.getDate() + 7 * weeks)
    return date.toLocaleDateString('en-GB')
}

function getAvgMassDiff(weeks: number, weight: number, massLossFactor: number): number {
    let massDiffSum = 0
    for (let i = 1; i <= weeks; i++) {
        massDiffSum += massReductionFunc(i, weight + massDiffSum, massLossFactor)
    }
    return massDiffSum / weeks
}

const massReductionFunc = (weeks: number, weight: number, massLossFactor: number) => massLossFactor * Math.pow(1 + massLossFactor, (weeks - 1)) * weight
