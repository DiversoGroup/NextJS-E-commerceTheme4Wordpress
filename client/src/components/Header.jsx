import Image from 'next/image';
import imgMenu from 'assets/images/menu.png';
import imgHome from 'assets/images/logopng1PNG 1.png';
import imgAvatar from 'assets/images/user-avatar.png';
import { useState } from 'react';
import Link from 'next/link';
import { ApolloConsumer } from '@apollo/client';
import Menu from './Menu';
import { GET_MENUS } from '../apollo/queries/getMenus';

function Header() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    const newState = !menu;
    setMenu(newState);
  };

  return (
    <>
      <nav className="fixed z-20 flex h-14 w-screen justify-between bg-primary px-6">
        <button onClick={handleClick} type="button">
          <Image
            src={imgMenu}
            alt="Picture of the author"
            width={33}
            height={23}
          />
        </button>
        <button type="button">
          <Image src={imgHome} alt="Picture of the author" />
        </button>
        <button type="button">
          <Link href="/Login">
            <Image src={imgAvatar} alt="Picture of the author" />
          </Link>
        </button>
      </nav>
      <Menu menuState={menu} />;
      <ApolloConsumer>
        {(client) => {
          client
            .query({
              query: GET_MENUS,
            })
            .then((res) => {
              const {
                data: {
                  headerMenus: { edges },
                },
              } = res;
              //este fucking edges es que que deberia renderizar
              console.log(edges);
            });

          return <Menu menuState={menu} />;
        }}
      </ApolloConsumer>
    </>
  );
}
export default Header;
