import Image from 'next/image';
import imgHeart from 'assets/images/heart.png';
import imgCart from 'assets/images/cart.png';
import imgSearch from 'assets/images/Search.png';

function BottomNav() {
  return (
    <>
      <div className="fixed bottom-0 flex h-14 w-screen items-start justify-between  bg-primary px-10 pt-3">
        <button type="button">
          <Image
            src={imgHeart}
            alt="Picture of the author"
            width={36}
            height={34}
          />
        </button>
        <button type="button">
          <Image
            src={imgCart}
            alt="Picture of the author"
            width={36}
            height={34}
          />
        </button>
      </div>
      <button
        className="fixed left-1/2 bottom-4 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-primary drop-shadow-md"
        type="button"
      >
        <figure className="pt-2 pl-1">
          <Image
            src={imgSearch}
            alt="Picture of the author"
            width={36}
            height={34}
          />
        </figure>
      </button>
    </>
  );
}
export default BottomNav;
