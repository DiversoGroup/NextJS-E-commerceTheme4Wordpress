import { useQuery } from '@apollo/client';
import { GET_MENUS } from 'apollo/queries/getMenus';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SocialMedia from './SocialMedia';

function Menu(prop) {
  const { data } = useQuery(GET_MENUS);
  const [menu, setMenu] = useState(false);
  const [edges, setEdges] = useState([]);
  const { menuState } = prop;
  useEffect(() => {
    setMenu(menuState);
  }, [menuState]);

  useEffect(() => {
    if (data !== undefined) {
      console.log(data.headerMenus.edges);
      setEdges(data.headerMenus.edges);
    }
  }, [data]);

  return (
    <div
      className={`absolute top-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-primary duration-300 ease-in ${
        menu ? 'top-0' : '-top-full'
      }`}
    >
      <div className="w-full text-center">
        <ul className="flex h-[80vh] flex-col items-center justify-center gap-3 font-outfitM text-3xl text-textGray">
          {edges.map((edge) => (
            <li
              className="w-[40%] border-b-4 border-transparent hover:border-textDark  hover:text-textDark "
              key={edge.node.id}
            >
              <Link href={edge.node.path}>{edge.node.label}</Link>
            </li>
          ))}
          {/* <li className="w-[40%] border-b-4 border-transparent hover:border-textDark  hover:text-textDark ">
            <Link href="/Catalogue">Catalogue</Link>
          </li> */}
        </ul>
      </div>
      <SocialMedia />
    </div>
  );
}

export default Menu;
