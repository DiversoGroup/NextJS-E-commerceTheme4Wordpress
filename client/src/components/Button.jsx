function Button(prop) {
  const { children, submit, bgStyle, textColor, additionalStyle, center } =
    prop;
  return (
    <button
      className={`mt-[3vh] flex h-12 w-full items-center ${
        center ? 'justify-center' : ''
      }  rounded-lg ${bgStyle || 'bg-primary'} text-lg ${
        textColor || 'text-textGray'
      } sp:h-14 sp:text-2xl ${additionalStyle}`}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
}
export default Button;
