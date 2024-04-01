interface ResultProps {
    children: string,
    id: string,
    value: number | string
}

export default function Results({ children, id, value }: ResultProps) {
    const inputStyle = "bg-gray-50 text-center text-xl font-bold text-gray-900 dark:bg-gray-700 dark:text-white"

    return (
        <div className="flex flex-col p-1 w-96 items-center rounded-2xl bg-gray-700">
            <label className="block text-sm font-medium text-gray-900 dark:text-white">{children}</label>
            {id !== 'weeks' && id !== 'endDate' && <p id={id} className={inputStyle}>{value} kcal</p>}
            {(id === 'weeks' || id === 'endDate') && <p id={id} className={inputStyle}>{value}</p>}
        </div>
    )
}