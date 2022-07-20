import Button from 'components/Button';
import RegisterForm from 'components/RegisterForm';
import Or from 'components/Or';
import PagesTitle from 'components/PagesTitle';
import { Icon } from '@iconify/react';

function Register() {
  return (
    <main className="flex h-screen min-h-[660px] flex-col items-center justify-center overflow-hidden  bg-hero-pattern bg-cover bg-center bg-no-repeat px-8 font-outfitL text-textDark">
      <div className="w-full md:w-containMax">
        <PagesTitle>Create an account</PagesTitle>
        <Button center>
          <figure className="flex bg-center ">
            <Icon className="h-11 w-11 " icon="flat-color-icons:google" />
          </figure>
          <span className="pl-3">Sign up with Google</span>
        </Button>
        <Or />
        <RegisterForm />
      </div>
    </main>
  );
}
export default Register;
