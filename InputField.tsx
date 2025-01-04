import * as React from 'react';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, id }) => {
  return (
    <div className="flex flex-col w-full font-medium min-h-[58px]">
      <label htmlFor={id} className="gap-2.5 self-start text-sm text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="flex overflow-hidden gap-2.5 items-center py-2.5 pl-2.5 w-full text-xs rounded-xl border border-solid border-neutral-500 max-w-[404px] min-h-[32px] text-neutral-500"
        aria-label={label}
      />
    </div>
  );
}