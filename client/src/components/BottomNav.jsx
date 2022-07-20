import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import useWindowSize from 'hooks/useWindowsRezise';

function BottomNav() {
  const viewPort = useWindowSize();
  const router = useRouter();

  if (viewPort.width > 900) {
    return null;
  }
  return (
    <>
      <div className="fixed bottom-0 flex h-14 w-screen items-start justify-between bg-primary px-10 pt-3">
        <button
          type="button"
          className="flex h-12 w-12  text-darkGray"
          onClick={() => router.push('/Likes')}
        >
          <Icon className=" h-9 w-12" icon="bi:heart" />
        </button>
        <button
          type="button"
          className="flex h-16 w-16 text-darkGray"
          onClick={() => router.push('/Cart')}
        >
          <Icon className=" h-9 w-12" icon="bi:cart" />
        </button>
      </div>
      <button
        className="fixed left-1/2 bottom-4 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-darkGray drop-shadow-md"
        type="button"
      >
        <Icon className="h-9 w-12 pt-1 pl-1" icon="akar-icons:search" />
      </button>
    </>
  );
}
export default BottomNav;
