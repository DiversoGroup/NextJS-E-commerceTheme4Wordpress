function LabelElement(prop) {
  const { name, error, children, forElement, errorMessage } = prop;
  return (
    <label
      htmlFor={forElement}
      className={`w-full  ${error ? 'text-red-400' : 'text-btnColor'}`}
    >
      <span className="mt-3 mb-2 block text-lg">{name}</span>
      {children}
      {error && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
    </label>
  );
}
export default LabelElement;
