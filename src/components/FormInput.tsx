const FormInput = ({
  name,
  label,
  type,
  required,
  value,
  onChange,
}: {
  name: string;
  label?: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-full relative mb-2 transition-all ease-linear delay-150">
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        required={required}
        className="w-full focus:pb-2 focus:pt-6 pb-2 pt-6 px-4 rounded-md peer block outline-none autofill:pb-2 autofill:pt-6 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
        placeholder=""
      />
      <label
        htmlFor={name}
        className="absolute top-0 left-0 h-full w-full px-4 py-4 pointer-events-none capitalize peer-focus:-translate-y-2.5 peer-focus:text-gray-500 peer-placeholder-shown:-translate-y-1 peer-[:not(:placeholder-shown)]:-translate-y-2.5"
      >
        {label ?? name}
        {required && (
          <span className="ml-1 w-full absolute text-red-500">*</span>
        )}
      </label>
    </div>
  );
};

export default FormInput;
