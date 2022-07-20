import LoginForm from 'components/LoginForm';
import Image from 'next/image';
import imgG0ogle from 'assets/images/google.svg';
import Or from 'components/Or';
import Button from 'components/Button';
import PagesTitle from 'components/PagesTitle';

function Login() {
  return (
    <main className="flex h-screen min-h-[660px] flex-col items-center justify-center overflow-hidden  bg-hero-pattern bg-cover bg-center bg-no-repeat px-8 font-outfitL text-textDark">
      <div className="w-full md:w-containMax">
        <PagesTitle>Sign in into your account</PagesTitle>
        <Button center>
          <figure className="flex bg-center ">
            <Image src={imgG0ogle} alt="google logo" height={47} width={47} />
          </figure>
          <span className="pl-3">Sign in with Google</span>
        </Button>
        <Or />
        <LoginForm />
      </div>
    </main>
  );
}
export default Login;
