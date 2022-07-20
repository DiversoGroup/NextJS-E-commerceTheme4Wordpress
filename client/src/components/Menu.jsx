import Link from 'next/link';
import { useEffect, useState } from 'react';
import SocialMedia from './SocialMedia';

function Menu(prop) {
  const [menu, setMenu] = useState(false);
  const { menuState } = prop;
  useEffect(() => {
    setMenu(menuState);
  }, [menuState]);
  return (
    <div
      className={`absolute top-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-primary duration-300 ease-in ${
        menu ? 'top-0' : '-top-full'
      }`}
    >
      <div className="w-full text-center">
        <ul className="flex h-[80vh] flex-col items-center justify-center gap-3 font-outfitM text-3xl text-textGray">
          <li className="w-[40%] border-b-4 border-transparent hover:border-textDark  hover:text-textDark ">
            <Link href="/">Home</Link>
          </li>
          <li className="w-[40%] border-b-4 border-transparent hover:border-textDark  hover:text-textDark ">
            <Link href="/Catalogue">Catalogue</Link>
          </li>
          <li className="w-[40%] border-b-4 border-transparent hover:border-textDark  hover:text-textDark ">
            Contact
          </li>
          <li className="w-[40%] border-b-4 border-transparent hover:border-textDark  hover:text-textDark ">
            settings
          </li>
        </ul>
      </div>
      <SocialMedia />
    </div>
  );
}
export default Menu;
