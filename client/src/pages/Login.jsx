import LoginForm from 'components/LoginForm';
import Image from 'next/image';
import imgG0ogle from 'assets/images/google.svg';
import Or from 'components/Or';

function Login() {
  return (
    <main className="flex h-screen min-h-[660px] flex-col items-center justify-center overflow-hidden  bg-hero-pattern bg-cover bg-center bg-no-repeat px-8 font-outfitL text-textDark">
      <h1 className="font-outfitM text-2xl">Sign in into your account</h1>
      <button
        className="mt-[3vh] flex h-12 w-full items-center  rounded-lg bg-primary text-lg text-textGray sp:h-14 sp:text-2xl"
        type="button"
      >
        <figure className="flex bg-center pl-[10%]">
          <Image src={imgG0ogle} alt="google logo" height={47} width={47} />
        </figure>
        <span className="pl-3">Sign in with Google</span>
      </button>
      <Or />
      <LoginForm />
    </main>
  );
}
export default Login;
