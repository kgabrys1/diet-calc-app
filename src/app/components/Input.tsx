interface InputProps {
    id: string,
    type: string
    value: number | string
    children: string,
    onChange: (inputId: string, newValue: string) => void
}

export default function Input({ id, type, value, children, onChange }: InputProps) {
    const isRadio = type === "radio"
    return (
        <div className="flex flex-col items-center">
            <label className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">{children}</label>
            {isRadio &&
                <div id={id} className="flex pt-2 gap-2 justify-between">
                    <div className="flex gap-1 text-zinc-200">
                        <input id="maleGenderRadio" name="gender" type={type} value="M" checked={value === 'M' ?? "checked"} onChange={(event) => onChange('gender', event.target.value)} />
                        <label>Male</label>
                    </div>
                    <div className="flex gap-1 text-zinc-200">
                        <input id="femaleGenderRadio" name="gender" type={type} value="F" checked={value === 'F' ?? "checked"} onChange={(event) => onChange('gender', event.target.value)} />
                        <label>Female</label>
                    </div>
                </div>
            }
        
            {!isRadio &&
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id={id} type={type} value={value} onChange={(event) => onChange(id, event.target.value)} required />
            }
            
        </div>
    )
}