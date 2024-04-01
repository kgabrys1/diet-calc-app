interface ResultProps {
    children: string
    id: string
    value: number | string
    unit: string
}

export default function Results({ children, id, value, unit }: ResultProps) {
    const inputStyle = "text-center text-xl font-bold dark:text-white"

    return (
        <div className="flex flex-col p-1 w-96 items-center rounded-2xl bg-gray-900">
            <label className="block mb-0.5 text-sm font-medium text-gray-400">{children}</label>
            {id !== 'weeks' && id !== 'endDate' && <p id={id} className={inputStyle}>{value} {unit}</p>}
            {(id === 'weeks' || id === 'endDate') && <p id={id} className={inputStyle}>{value}</p>}
        </div>
    )
}