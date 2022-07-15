import Image from 'next/image';
import imgProduct from 'assets/images/logopng1PNG 1.png';
import CartSvg from './CartSvg';
import HeartSvg from './HeartSvg';

function Card() {
  // const { imgProduct } = prop;

  return (
    <section className="min-h-[294px] min-w-[175px] max-w-[175px] rounded-xl bg-primary drop-shadow-md">
      <figure className="flex h-36 w-full items-center justify-center rounded-xl bg-secondarySoft bg-cover bg-center">
        <Image
          // loader="loading..."
          alt="product"
          src={imgProduct}
        />
      </figure>
      <div className="flex flex-col px-3">
        <h2 className="w-full truncate py-2 font-outfitM text-lg">
          Title aasdasdad
        </h2>
        <p>100$</p>
        <span className="flex w-full justify-between pt-[20%]">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondarySoft"
          >
            <HeartSvg heartStyles=" fill-textGray" />
          </button>
          <button
            type="button"
            className="flex h-10 w-20 items-center justify-center rounded-lg bg-btnColor"
          >
            <CartSvg cartStyle="stroke-primary" />
          </button>
        </span>
      </div>
    </section>
  );
}
export default Card;
