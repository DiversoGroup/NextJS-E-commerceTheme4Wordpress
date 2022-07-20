function PagesTitle(prop) {
  const { children, additionalStyle } = prop;
  return (
    <h1
      className={`font-outfitM text-2xl text-textDark lg:text-4xl sp:text-3xl  ${additionalStyle}`}
    >
      {children}
    </h1>
  );
}
export default PagesTitle;
