import Image from 'next/image';
import imgProduct from 'assets/images/logopng1PNG 1.png';
import CartSvg from './CartSvg';
import HeartSvg from './HeartSvg';

function Card() {
  // const { imgProduct } = prop;

  return (
    // <section className="min-h-[294px] min-w-[175px] max-w-[175px] rounded-xl bg-primary drop-shadow-md">
    //   <figure className="flex h-36 w-full items-center justify-center rounded-xl bg-secondarySoft bg-cover bg-center">
    //     <Image
    //       // loader="loading..."
    //       alt="product"
    //       src={imgProduct}
    //     />
    //   </figure>
    //   <div className="flex flex-col px-3">
    //     <h2 className="w-full truncate py-2 font-outfitM text-lg">
    //       Title aasdasdad
    //     </h2>
    //     <p>100$</p>
    //     <span className="flex w-full justify-between pt-[20%]">
    //       <button
    //         type="button"
    //         className="flex h-10 w-10 items-center justify-center rounded-full bg-secondarySoft"
    //       >
    //         <HeartSvg heartStyles=" fill-textGray" />
    //       </button>
    //       <button
    //         type="button"
    //         className="flex h-10 w-20 items-center justify-center rounded-lg bg-btnColor"
    //       >
    //         <CartSvg cartStyle="stroke-primary" />
    //       </button>
    //     </span>
    //   </div>
    // </section>
    <div className="h-[240px] w-[163px] rounded-xl bg-primary drop-shadow-md md:h-[402px] md:w-full md:min-w-[300px]">
      <figure className="flex h-36 w-full items-center justify-center rounded-xl bg-secondarySoft bg-cover bg-center md:h-[224px]">
        <Image
          // loader="loading..."
          alt="product"
          src={imgProduct}
        />
      </figure>
      <div className="flex flex-col px-3 md:justify-center md:px-7">
        <h2 className="w-full truncate py-2 font-outfitM text-lg md:text-2xl">
          Title aasdasasdasdasdadad
        </h2>
        <span className="flex items-center justify-between text-lg md:items-end md:text-2xl">
          <div className="flex flex-col gap-4">
            <p>100$</p>
            <button
              type="button"
              className="hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-secondarySoft md:flex"
            >
              <HeartSvg />
            </button>
          </div>
          <button
            type="button"
            className="flex h-9 w-16 items-center justify-center rounded-lg bg-btnColor md:h-[60px] md:w-[70%]"
          >
            <span className="flex">
              <CartSvg cartStyle="stroke-primary" />
              <p className="hidden pl-3 text-primary md:block">Add to cart</p>
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}
export default Card;
