import React, { DetailedHTMLProps } from "react";

import { FormEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";

interface ISearchInputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onSearch?: (e: FormEvent<HTMLFormElement>) => void;
}
export const SearchInput = ({ onSearch, ...props }: ISearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleToggleFocus = (type: string) => {
    if (type === "focus") {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };

  return (
    <form onSubmit={onSearch}>
      <div className="w-full rounded-lg border border-solid border-gray-300 flex items-center py-2 px-3">
        <BiSearch size={20} opacity={isFocused ? 1 : 0.5} />
        <input
          data-testid="search"
          className=" flex-grow border-none outline-none ml-3"
          type="text"
          placeholder="Search"
          onFocus={() => handleToggleFocus("focus")}
          onBlur={() => handleToggleFocus("blur")}
          {...props}
        />
      </div>
    </form>
  );
};
