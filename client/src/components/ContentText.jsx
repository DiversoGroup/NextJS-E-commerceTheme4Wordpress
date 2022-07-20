function ContentText(prop) {
  const { children, additionalStyle } = prop;
  return (
    <p className={`font-outfitL text-base text-textGray ${additionalStyle}`}>
      {children}
    </p>
  );
}
export default ContentText;
