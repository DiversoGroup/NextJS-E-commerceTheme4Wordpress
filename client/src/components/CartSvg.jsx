function CartSvg(prop) {
  const { cartStyle } = prop;
  return (
    <svg
      className="mr-0.5"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke="#FEFEFE"
        className={cartStyle}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.625 5.625h22.5l-2.813 12.188H8.438m16.876 3.75H9.374L4.687 1.875H1.876M23.438 27.188a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM11.25 27.188a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z"
      />
    </svg>
  );
}

export default CartSvg;
