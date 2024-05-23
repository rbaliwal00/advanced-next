import React, { useState } from 'react';

interface TextAreaProps {
  label: string;
  helperText: string;
  disabled: boolean;
  placeholder: string;
  value: string;
  maxLength: number;
  showCharCount?: boolean;
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, helperText, disabled, placeholder, value, maxLength =300,showCharCount=true,onChange }) => {
  const [currentValue, setCurrentValue] = useState<string>(value);
  const [charCount, setCharCount] = useState(value.length);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      setCurrentValue(newValue);
      setCharCount(newValue.length);
      onChange(newValue);
      console.log('Current value:', newValue);
    }
  };

  return (
    <div className='text-[#637381] text-sm'>
      <label className=' block text-base font-medium dark:text-white'>
        {label}
      </label>
      <textarea
        rows={5}
        disabled={disabled}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        className='resize-none w-full bg-transparent rounded-md border border-stroke hover:border-dark-3 p-5 text-[#4B5563] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
      />
      <div className='flex justify-between'>
        <p>{helperText}</p>
        {showCharCount && <p>{charCount}/{maxLength}</p>}
      </div>
    </div>
  );
};

export default TextArea;
