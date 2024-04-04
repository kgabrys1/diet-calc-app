import { Tooltip } from 'react-tooltip'

interface ResultProps {
    children: React.ReactNode
    id: string
    value: number | string
    tooltipText?: string
    unit?: string
}

export default function Results({ children, id, value, tooltipText, unit }: Readonly<ResultProps>) {
    const pStyle = "text-center text-xl font-bold dark:text-white"
    const isWeeks = id === 'weeks'
    const isEndDate = id === 'endDate'
    const isCi = id === 'ci'
    return (
        <div
            className="flex flex-col p-1 w-96 items-center rounded bg-gray-900"
            data-tooltip-id={`tooltip-${id}`}
            data-tooltip-content={tooltipText}
            data-tooltip-place="top"
        >
            <label className="block mb-0.5 text-sm font-medium text-gray-400">{children}</label>
            {!isWeeks && !isEndDate && <p id={id} className={pStyle}>{value} {unit}</p>}
            {(isWeeks || isEndDate) && <p id={id} className={pStyle}>{value}</p>}
            {isCi &&
                <Tooltip style={{ width: "25%" }} id={`tooltip-${id}`} />
            }
        </div>
    )
}