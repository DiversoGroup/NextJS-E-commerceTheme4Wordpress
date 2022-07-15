import { useState } from 'react';
import RadioBtn from './RadioBtn';

function CardDetails() {
  const [count, setCount] = useState(1);
  const handlerRestCount = () => {
    setCount(count - 1);
  };
  const handlerCount = () => {
    setCount(count + 1);
  };
  return (
    <div className=" h-screen min-h-[600px] bg-secondarySoft ">
      <figure className="h-[45%] bg-secondary" />
      <div className="flex w-screen flex-col justify-between p-8">
        <span className="flex items-center justify-between">
          <h1 className="w-full truncate py-2 pr-2 font-outfitM text-3xl">
            Title asdlkajlksdjlakjsdlkja
          </h1>
          <div className="flex h-14 w-36 min-w-[9rem] items-center justify-between rounded-lg bg-secondary px-1 text-lg">
            <button
              className="h-12 w-12 rounded-lg bg-primary"
              onClick={handlerRestCount}
              type="button"
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="h-12 w-12 rounded-lg bg-primary"
              onClick={handlerCount}
              type="button"
            >
              +
            </button>
          </div>
        </span>
        <span className="flex items-center justify-between">
          <p className="text-3xl">200$</p>
          <div className="flex min-w-[145px] flex-col items-end justify-center py-3">
            {/* <h3>Colors</h3> */}
            <span className="grid grid-cols-4 justify-items-end gap-2">
              <RadioBtn colorBtn="bg-[#0891B2] border-[#0891B2]" />
              <RadioBtn colorBtn="bg-[#d72638] border-[#d72638]" />
              <RadioBtn colorBtn="bg-[#420039] border-[#420039]" />
              <RadioBtn colorBtn="bg-[#a2d729] border-[#a2d729]" />
            </span>
          </div>
        </span>
        <p className="my-[3vh] max-w-full overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          ducimus. Quae error qui laudantium rem doloremque ea
          easdal;kalksdjlkajlskdjlajsldkjalsjldjalksdjlalsd
        </p>
        <button
          className="my-[3vh] h-12 w-full rounded-lg bg-btnColor font-outfitL text-lg text-primary sp:h-14 sp:text-2xl"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default CardDetails;
