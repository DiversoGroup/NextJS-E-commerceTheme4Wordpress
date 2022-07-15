import Image from 'next/image';
import imgStore from 'assets/images/Group.svg';

function Landing() {
  return (
    <main className="flex h-screen min-h-[660px] flex-col items-center justify-start space-y-[9vh] overflow-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat px-8">
      <div className="mt-[10vh] w-full">
        <h1 className="font-outfitM text-2xl text-textDark sp:text-3xl">
          This is the Diverso’s E-commerce theme/template for wordpress
        </h1>
        <p className="font-outfitL text-base text-textGray">
          For a better understanding take a look of the README.md document
        </p>
      </div>
      <button
        type="button"
        className="flex h-16 min-h-[4rem] w-16 justify-center rounded-full bg-btnColor"
      >
        <Image
          // loader={myLoader}
          src={imgStore}
          alt="Picture of the author"
          width={34}
          height={36}
        />
      </button>
      <section className="w-full min-w-min">
        <h2 className="font-outfitM text-2xl text-textDark">
          Sign up to our newsletter
        </h2>
        <p className="font-outfitL text-base text-textGray">
          Sign up to get the latest on sales, new releases and more …
        </p>
        <input
          className="mt-[3vh] h-12  w-full rounded-lg bg-primary px-5 font-outfitL text-lg sp:h-14 sp:text-2xl"
          placeholder="Email"
          type="text"
        />
        <button
          className="mt-[3vh] h-12  w-full rounded-lg border-2 border-btnColor bg-transparent font-outfitL text-lg text-btnColor sp:h-14 sp:text-2xl"
          type="button"
        >
          Send
        </button>
      </section>
    </main>
  );
}
export default Landing;
