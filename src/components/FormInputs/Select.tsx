import { useId } from "react";
import { UseFormRegister } from "react-hook-form";

type SelectProps = {
  label: string;
  className: string;
  errorLabel: string;
  options: string[];
  register: UseFormRegister<any>;
  required: boolean;
};

const Select = ({
  label,
  className = "",
  errorLabel,
  options,
  register,
  required,
}: SelectProps) => {
  const id = useId();
  return (
    <div className="form-control">
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text capitalize">{label}</span>
        </label>
      )}
      {errorLabel && (
        <label className="label">
          <span className="label-text text-error">{errorLabel}</span>
        </label>
      )}
      <select
        id={id}
        className={"select select-bordered w-full " + className}
        {...register(label, { required })}
      >
        {options.map((option, i) => (
          <option className="capitalize" key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
