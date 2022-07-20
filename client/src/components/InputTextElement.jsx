function InputTextElement(prop) {
  const { placeholder, name, error, register, type } = prop;
  return (
    <input
      type={type}
      name={name}
      id={name}
      autoComplete="off"
      placeholder={placeholder}
      className={`h-12 w-full rounded-lg border-2 bg-primary py-2 px-3 caret-btnColor outline-none placeholder:text-textGray focus:border-btnColor ${
        error ? 'border-red-400 text-red-300' : 'border-primary text-textDark'
      }`}
      {...register}
    />
  );
}
export default InputTextElement;
