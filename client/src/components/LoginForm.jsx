import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import InputTextElement from './InputTextElement';
import LabelElement from './LabelElement';
import Button from './Button';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

function LoginForm() {
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    criteriaMode: 'all',
  });
  const sendData = (data) => console.log(data);
  return (
    <form className="w-full font-outfitL" onSubmit={handleSubmit(sendData)}>
      <LabelElement
        forElement="email"
        name="Email"
        error={errors.email}
        errorMessage="A valid email is required."
      >
        <InputTextElement
          type="text"
          name="email"
          placeholder="elpepe@gmail.com"
          error={errors.email}
          register={register('email', { required: true })}
        />
      </LabelElement>
      <LabelElement
        forElement="password"
        name="Password"
        error={errors.password}
        errorMessage="Your password is required."
      >
        <InputTextElement
          type="password"
          name="password"
          placeholder="superduperpassword"
          error={errors.password}
          register={register('password', { required: true })}
        />
      </LabelElement>
      <span className="my-3 block  w-full text-right">
        <a
          className="font-outfitM text-btnColor underline"
          href="https://thebeginningaftertheend.online/manga/the-beginning-after-the-end-chapter-154/"
        >
          Forgot your password?
        </a>
      </span>
      <Button bgStyle="bg-btnColor" textColor="text-primary" center>
        Sing in
      </Button>
      <span className="my-4 flex justify-center text-lg">
        <h3>Don’t have an account?</h3>
        <Link href="/Register">
          <a className="pl-2 font-outfitM text-btnColor underline">Sign up</a>
        </Link>
      </span>
    </form>
  );
}
export default LoginForm;
