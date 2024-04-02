interface ResultProps {
    children: React.ReactNode
    id: string
    value: number | string
    unit: string
}

export default function Results({ children, id, value, unit }: Readonly<ResultProps>) {
    const pStyle = "text-center text-xl font-bold dark:text-white"
    return (
        <div className="flex flex-col p-1 w-96 items-center rounded bg-gray-900">
            <label className="block mb-0.5 text-sm font-medium text-gray-400">{children}</label>
            {id !== 'weeks' && id !== 'endDate' && <p id={id} className={pStyle}>{value} {unit}</p>}
            {(id === 'weeks' || id === 'endDate') && <p id={id} className={pStyle}>{value}</p>}
        </div>
    )
}