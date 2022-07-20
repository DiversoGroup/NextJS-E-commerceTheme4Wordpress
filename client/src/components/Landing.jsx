import Image from 'next/image';
import imgStore from 'assets/images/Group.svg';
import { useRouter } from 'next/router';
import PagesTitle from './PagesTitle';
// import Button from './Button';
import ContentText from './ContentText';
import EmailForm from './EmailForm';
import SocialMedia from './SocialMedia';

function Landing() {
  const router = useRouter();
  return (
    <main className="grid h-screen min-h-[660px] flex-col bg-secondarySoft bg-hero-pattern bg-cover bg-center bg-no-repeat px-8 md:grid-cols-2 md:bg-none md:px-0">
      <div className="mt-[10vh] flex w-full flex-col items-center md:mt-0 md:justify-center md:bg-hero-pattern md:bg-cover md:bg-no-repeat md:px-[10vh]">
        <PagesTitle additionalStyle="max-w-[440px]">
          This is the Diverso’s E-commerce theme/template for wordpress
        </PagesTitle>
        <ContentText additionalStyle="max-w-[440px]">
          For a better understanding take a look of the README.md document
        </ContentText>
        <button
          type="button"
          className="mt-[10vh] flex h-16 min-h-[4rem] w-16  justify-center rounded-full bg-btnColor text-2xl text-primary md:w-full md:max-w-[440px] md:items-center md:rounded-lg"
          onClick={() => router.push('/Catalogue')}
        >
          <Image
            // loader={myLoader}
            src={imgStore}
            alt="Picture of the author"
            width={34}
            height={36}
          />
          <span className="hidden pl-4 md:block ">Shop now</span>
        </button>
        <SocialMedia additionalStyle="bottom-[10%] absolute" />
      </div>
      <section className="w-full min-w-min flex-col items-center justify-center md:flex md:px-[10vh]">
        <div className="max-w-max">
          <h2 className="w-full text-left font-outfitM text-2xl text-textDark lg:text-3xl">
            Sign up to our newsletter
          </h2>
          <ContentText>
            Sign up to get the latest on sales, new releases and more …
          </ContentText>
          <EmailForm />
        </div>
      </section>
    </main>
  );
}
export default Landing;
