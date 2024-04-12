/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { DetailedHTMLProps } from "react";

interface ISelectProps
  extends DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: Array<{
    key: string;
    value: string;
  }>;
}
const Select = ({ options, ...props }: ISelectProps) => {
  return (
    <select
      className="w-32 rounded-lg bg-transparent p-2 border border-solid border-gray-300 outline-none"
      {...props}
    >
      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.key}
        </option>
      ))}
    </select>
  );
};

export default Select;
