import Image from 'next/image';
import imgMenu from 'assets/images/menu.png';
import imgHome from 'assets/images/logopng1PNG 1.png';
import imgAvatar from 'assets/images/user-avatar.png';

function Header() {
  return (
    <nav className="fixed z-10 flex h-14 w-screen justify-between bg-primary px-6">
      <button type="button">
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
        <Image src={imgAvatar} alt="Picture of the author" />
      </button>
    </nav>
  );
}
export default Header;
