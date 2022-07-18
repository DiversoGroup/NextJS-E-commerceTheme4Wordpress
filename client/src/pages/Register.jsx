import Button from 'components/Button';
import Image from 'next/image';
import imgGoogle from 'assets/images/google.svg';
import RegisterForm from 'components/RegisterForm';
import Or from 'components/Or';
import PagesTitle from 'components/PagesTitle';

function Register() {
  return (
    <main className="flex h-screen min-h-[660px] flex-col items-center justify-center overflow-hidden  bg-hero-pattern bg-cover bg-center bg-no-repeat px-8 font-outfitL text-textDark">
      <PagesTitle>Create an account</PagesTitle>
      <Button>
        <figure className="flex bg-center pl-[10%]">
          <Image src={imgGoogle} alt="google logo" height={47} width={47} />
        </figure>
        <span className="pl-3">Sign up with Google</span>
      </Button>
      <Or />
      <RegisterForm />
    </main>
  );
}
export default Register;
