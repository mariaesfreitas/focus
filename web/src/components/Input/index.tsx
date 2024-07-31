'use client';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  type: string;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
};

export function Input<T extends FieldValues>({
  name,
  register,
  type,
  placeholder,
  errorMessage,
  value,
}: InputProps<T>) {
  return (
    <div className="flex flex-col items-center w-full mt-6">
      {name === 'phone' ? (
        <ReactInputMask
          mask={'(99) 99999-9999'}
          type={type}
          placeholder={placeholder}
          className="w-3/4 md:w-1/2 border border-cyan-950 p-3"
          {...register(name, { required: true })}
          value={value}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-3/4 md:w-1/2 border border-cyan-950 p-3"
          {...register(name, { required: true })}
          value={value}
        />
      )}
      <p className="text-red-500">{errorMessage}</p>
    </div>
  );
}
