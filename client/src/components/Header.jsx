import Image from 'next/image';
import imgHome from 'assets/images/logopng1PNG 1.png';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { ApolloConsumer } from '@apollo/client';
import Menu from './Menu';

function Header() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    const newState = !menu;
    setMenu(newState);
  };
  return (
    <>
      <nav className="fixed z-20 flex h-14 w-screen justify-between bg-primary px-6">
        <button onClick={handleClick} type="button">
          <Icon className="h-10 w-10 text-darkGray" icon="gg:menu-left" />
        </button>
        <button type="button" onClick={() => router.push('/')}>
          <Image src={imgHome} alt="Picture of the author" />
        </button>
        <button type="button">
          <Link href="/Login">
            <Icon
              className="h-10 w-10 text-darkGray"
              icon="carbon:user-avatar"
            />
          </Link>
        </button>
      </nav>
      <ApolloConsumer>
        {(client) => {
          return <Menu menuState={menu} {...client} />;
        }}
      </ApolloConsumer>
    </>
  );
}
export default Header;
