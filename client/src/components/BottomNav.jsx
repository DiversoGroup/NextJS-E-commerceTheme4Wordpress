import Image from 'next/image';
import { useRouter } from 'next/router';
import imgHeart from 'assets/images/heart.png';
import { Icon } from '@iconify/react';
import imgSearch from 'assets/images/Search.png';

function BottomNav() {
  const router = useRouter();
  return (
    <>
      <div className="fixed bottom-0 flex h-14 w-screen items-start justify-between bg-primary px-10 pt-3">
        <button
          type="button"
          className=" flex align-center w-12 h-12  text-darkGray"
          onClick={() => router.push('/Likes')}
        >
          <Icon
            className=" w-12 h-9"
            icon="bi:heart"
          />
        </button>
        <button
          type="button"
          className="flex align-center w-16 h-16 text-darkGray"
          onClick={() => router.push('/Cart')}
        >
          <Icon 
          className=" w-12 h-9"
          icon="bi:cart" 
          />
        </button>
      </div>
      <button
        className="fixed left-1/2 bottom-4 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-darkGray drop-shadow-md"
        type="button"
      >
         <Icon 
          className=" w-12 h-9"
          icon="akar-icons:search" 
          />
      </button>
    </>
  );
}
export default BottomNav;
