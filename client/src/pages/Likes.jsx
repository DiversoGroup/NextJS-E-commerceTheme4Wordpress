//import { useEffect } from 'react';
import LikedItem from '../components/LikedItem';
import { Icon } from '@iconify/react';

function Likes() {
  return (
    <main className="flex h-[100%] min-h-[660px] flex-col bg-secondarySoft px-2 sp:px-8">
      <section className="mt-[12vh]">
        <div>
          <h2 className="font-outfitM text-2xl text-textGray">Total items</h2>
          <span className="font-outfitM text-2xl text-textDark">6</span>
        </div>
      </section>
      <section className="flex justify-between h-16 items-center mt-[10px]">
        <button
          type="button"
          className="flex w-[70%] h-12  items-center justify-center rounded-lg bg-btnColor px-5 font-outfitL text-lg sp:h-14 sp:text-2xl text-primary"
        >
          <span className="flex pl-3 md:block">
            <Icon className="mr-[8px] h-7 w-7" icon="bi:cart" />
            Add to cart
          </span>
        </button>

        <button className="flex h-14 w-14  items-center justify-center rounded-full bg-primary drop-shadow-md sp:text-2xl text-textGray">
          <Icon className="h-7 w-7" icon="fa6-regular:trash-can" />
        </button>
      </section>
      <section className="flex justify-betwen space-y-3 flex-col mt-[30px] pb-[30px]">
        <LikedItem />
        <LikedItem />
        <LikedItem />
        <LikedItem />
        <LikedItem />
      </section>
    </main>
  );
}
export default Likes;
