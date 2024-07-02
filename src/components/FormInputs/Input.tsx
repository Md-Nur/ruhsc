import { useId } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  type: string;
  className: string;
  errorLabel: string;
  register: UseFormRegister<any>;
  required: boolean;
};

const Input = ({
  type = "text",
  label,
  className = "",
  errorLabel,
  register,
  required,
}: InputProps) => {
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
      <input
        id={id}
        type={type}
        placeholder={label[0].toUpperCase() + label.slice(1)}
        className={"input input-bordered" + className}
        {...register(label, { required })}
      />
    </div>
  );
};

export default Input;
