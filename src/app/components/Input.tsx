interface InputProps {
    id: string
    type: string
    unit: string
    value: number | string
    children: React.ReactNode
    onChange: (inputId: string, newValue: string) => void
}

export default function Input({ id, type, unit, value, children, onChange }: Readonly<InputProps>) {
    const isGender = id === "gender"
    const isReductionIntensity = id === "reductionIntensity"
    const isPal = id === "pal"
    return (
        <div className="flex flex-col items-center">
            <label className="block mb-0.5 text-sm font-medium text-gray-400">{children}</label>
            {isGender &&
                <div id={id} className="flex space-x-2">
                    <div>
                        <input
                            id="maleGenderRadio"
                            name={id}
                            type={type}
                            value="M"
                            checked={value === 'M'}
                            onChange={(event) => onChange(id, event.target.value)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="maleGenderRadio" className="ms-1 font-medium text-gray-900 dark:text-white">Male</label>
                    </div>
                    <div>
                        <input
                            id="femaleGenderRadio"
                            name={id}
                            type={type}
                            value="F"
                            checked={value === 'F'}
                            onChange={(event) => onChange(id, event.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="femaleGenderRadio" className="ms-1 font-medium text-gray-900 dark:text-white">Female</label>
                    </div>
                </div>
            }

            {isReductionIntensity &&
                <div id={id} className="flex space-x-2">
                    <div>
                        <input
                            id="reductionIntensityLow"
                            name={id}
                            type={type}
                            value="low"
                            checked={value === 'low'}
                            onChange={(event) => onChange(id, event.target.value)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="reductionIntensityLow" className="ms-1 font-medium text-gray-900 dark:text-white">Low</label>
                    </div>
                    <div>
                        <input
                            id="reductionIntensityMedium"
                            name={id}
                            type={type}
                            value="med"
                            checked={value === 'med'}
                            onChange={(event) => onChange(id, event.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="reductionIntensityMedium" className="ms-1 font-medium text-gray-900 dark:text-white">Medium</label>
                    </div>
                    <div>
                        <input
                            id="reductionIntensityHigh"
                            name={id}
                            type={type}
                            value="high"
                            checked={value === 'high'}
                            onChange={(event) => onChange(id, event.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="reductionIntensityHigh" className="ms-1 font-medium text-gray-900 dark:text-white">High</label>
                    </div>
                </div>
            }

            {!isGender && !isReductionIntensity &&
                <div className="relative flex flex-wrap items-stretch w-64">
                    <input
                        id={id}
                        type={type}
                        value={value}
                        step={isPal ? 0.1 : 1}
                        min={isPal ? 1.0 : 0}
                        onChange={(event) => onChange(id, event.target.value)}
                        className={`relative bg-gray-900 m-0 block flex-auto ${unit ? 'rounded-s' : 'rounded'} border border-solid border-neutral-200 bg-clip-padding px-2 py-[0.17rem] text-sm font-normal leading-[1.5] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary`}
                        aria-describedby="inputGroup"
                        required />
                    {unit &&
                        <span
                            className="flex items-center whitespace-nowrap rounded-e border border-e-0 border-solid border-neutral-200 px-2 py-[0.17rem] text-center text-sm font-normal leading-[1.5] text-surface dark:border-white/10 dark:text-white bg-gray-700"
                            id="inputGroup"
                        >{unit}</span>
                    }
                </div>
            }

        </div>
    )
}