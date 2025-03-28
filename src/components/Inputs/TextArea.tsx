import React, { FC, ChangeEvent, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaProps> = ({ id, value, onChange, placeholder, className, readOnly }) => (
  <textarea
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    readOnly={readOnly}
    className={`py-2.5 px-4 border-none focus:outline-none block w-full border-transparent 
      rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 ${className}`}
  />
);

export default TextArea;
