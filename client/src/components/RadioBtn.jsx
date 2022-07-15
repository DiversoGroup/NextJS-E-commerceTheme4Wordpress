function RadioBtn(prop) {
  const { colorBtn } = prop;
  return (
    <label htmlFor={colorBtn} className="h-7 w-7 cursor-pointer">
      <input
        className={`${colorBtn} float-left my-1 mr-2 h-5 w-5 cursor-pointer appearance-none rounded-full border-4 bg-contain bg-center bg-no-repeat align-top transition duration-200  checked:bg-primary focus:outline-none`}
        id={colorBtn}
        value="color"
        name="platform"
        type="radio"
      />
    </label>
  );
}
export default RadioBtn;
