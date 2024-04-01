interface InputProps {
    id: string
    type: string
    unit: string
    value: number | string
    children: string
    onChange: (inputId: string, newValue: string) => void
}

export default function Input({ id, type, unit, value, children, onChange }: InputProps) {
    const isRadio = type === "radio"
    const isPal = id === "pal"
    const isDate = type === "date"
    const inputStyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    return (
        <div className="flex flex-col items-center">
            <label className="block mb-0.5 text-sm font-medium text-gray-400">{children}</label>
            {isRadio &&
                <div id={id} className="flex space-x-2">
                    <div>
                        <input
                            id="maleGenderRadio"
                            name="gender"
                            type={type}
                            value="M"
                            checked={value === 'M' ?? "checked"}
                            onChange={(event) => onChange('gender', event.target.value)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ms-1 font-medium text-gray-900 dark:text-white">Male</label>
                    </div>
                    <div>
                        <input
                            id="femaleGenderRadio"
                            name="gender"
                            type={type}
                            value="F"
                            checked={value === 'F' ?? "checked"}
                            onChange={(event) => onChange('gender', event.target.value)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ms-1 font-medium text-gray-900 dark:text-white">Female</label>
                    </div>
                </div>
            }

            {!isRadio &&
                <div className="relative flex flex-wrap items-stretch w-64">
                    {!isPal && !isDate &&
                        <span
                            className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-2 py-[0.17rem] text-center text-sm font-normal leading-[1.5] text-surface dark:border-white/10 dark:text-white bg-gray-700"
                            id="inputGroup"
                        >{unit}</span>
                    }
                    <input
                        id={id}
                        type={type}
                        value={value}
                        step={isPal ? 0.1 : 1}
                        onChange={(event) => onChange(id, event.target.value)}
                        className="relative bg-gray-900 m-0 block flex-auto rounded-e border border-solid border-neutral-200 bg-transparent bg-clip-padding px-2 py-[0.17rem] text-sm font-normal leading-[1.5] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                        aria-describedby="inputGroup"
                        required />
                </div>
            }

        </div>
    )
}