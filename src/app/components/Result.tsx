import { Tooltip } from "react-tooltip";

const pStyle = "text-center text-xl font-bold dark:text-white";

interface ResultProps {
  children: React.ReactNode;
  id: string;
  value: number | string;
  tooltipText?: string;
  unit?: string;
}

export default function Results({
  children,
  id,
  value,
  tooltipText,
  unit,
}: Readonly<ResultProps>) {
  return (
    <div className="flex flex-col p-1 w-96 items-center rounded bg-gray-900">
      <label
        className={`block mb-0.5 text-sm font-medium text-gray-400 ${
          tooltipText && "hover:text-gray-300"
        }`}
        data-tooltip-id={`tooltip-${id}`}
        data-tooltip-content={tooltipText}
        data-tooltip-place="top"
      >
        {children}
      </label>
      {unit && (
        <p id={id} className={pStyle}>
          {value} {unit}
        </p>
      )}
      {!unit && (
        <p id={id} className={pStyle}>
          {value}
        </p>
      )}
      {tooltipText && <Tooltip style={{ width: "25%" }} id={`tooltip-${id}`} />}
    </div>
  );
}
