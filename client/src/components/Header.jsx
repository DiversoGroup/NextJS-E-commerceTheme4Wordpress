import Image from 'next/image';
import imgMenu from 'assets/images/menu.png';
import imgHome from 'assets/images/logopng1PNG 1.png';
import imgAvatar from 'assets/images/user-avatar.png';
import { useState } from 'react';
import Link from 'next/link';
import Menu from './Menu';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

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
          <Image
            src={imgMenu}
            alt="Picture of the author"
            width={33}
            height={23}
          />
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
      <Menu menuState={menu} />
    </>
  );
}
export default Header;
