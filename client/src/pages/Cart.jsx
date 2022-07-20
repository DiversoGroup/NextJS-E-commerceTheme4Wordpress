// import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import LikedItem from '../components/LikedItem';

function Cart() {
  return (
    <main className="flex h-[100%] min-h-[660px] flex-col bg-secondarySoft px-2 sp:px-8">
      <section className="mt-[12vh] flex justify-between pr-[10%]">
        <div>
          <h2 className="font-outfitM text-2xl text-textGray">Total price</h2>
          <span className="font-outfitM text-2xl text-textDark">320$</span>
        </div>
        <div>
          <h2 className="font-outfitM text-2xl text-textGray">Total items</h2>
          <span className="font-outfitM text-2xl text-textDark">5</span>
        </div>
      </section>
      <section className="mt-[10px] flex h-16 items-center justify-between">
        <button
          type="button"
          className="flex h-12 w-[70%]  items-center justify-center rounded-lg bg-btnColor px-5 font-outfitL text-lg text-primary sp:h-14 sp:text-2xl"
        >
          <span className="flex pl-3 md:block">Pay</span>
        </button>

        <button
          type="button"
          className="flex h-14 w-14  items-center justify-center rounded-full bg-primary text-textGray drop-shadow-md sp:text-2xl"
        >
          <Icon className="h-7 w-7" icon="fa6-regular:trash-can" />
        </button>
      </section>
      <section className="mt-[30px] flex flex-col justify-between space-y-3 pb-[30px]">
        <LikedItem />
        <LikedItem />
        <LikedItem />
        <LikedItem />
        <LikedItem />
      </section>
    </main>
  );
}

export default Cart;
