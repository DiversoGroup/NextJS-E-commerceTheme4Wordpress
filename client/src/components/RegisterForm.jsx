import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import Button from './Button';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
function RegisterForm() {
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
      <label
        htmlFor="email"
        className={`w-full  ${errors.email ? 'text-red-400' : 'text-btnColor'}`}
      >
        <span className="mt-3 mb-2 block text-lg">Email</span>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="elpepe@gmail.com"
          className={`h-12 w-full rounded-lg border-2 bg-primary py-2 px-3 caret-btnColor outline-none placeholder:text-textGray focus:border-btnColor ${
            errors.email
              ? 'border-red-400 text-red-300'
              : 'border-primary text-textDark'
          }`}
          {...register('email', { required: true })}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            A valid email is required.
          </p>
        )}
      </label>
      <label
        htmlFor="password"
        className={` ${errors.password ? 'text-red-400' : 'text-btnColor'}`}
      >
        <span className="mt-3 mb-2 block text-lg">Password</span>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="superduperpassword"
          className={`h-12 w-full rounded-lg border-2 bg-primary py-2 px-3 caret-btnColor outline-none placeholder:text-textGray focus:border-btnColor ${
            errors.password
              ? 'border-red-400 text-red-300'
              : 'border-primary text-textDark'
          }`}
          {...register('password', { required: true })}
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-500">
            Your password is required.
          </p>
        )}
      </label>
      <label
        htmlFor="passwordConfirmation"
        className={` ${
          errors.passwordConfirmation ? 'text-red-400' : 'text-btnColor'
        }`}
      >
        <span className="mt-3 mb-2 block text-lg">Repeat password</span>
        <input
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          autoComplete="off"
          placeholder="superduperpassword"
          className={`h-12 w-full rounded-lg border-2 bg-primary py-2 px-3 caret-btnColor outline-none placeholder:text-textGray focus:border-btnColor ${
            errors.passwordConfirmation
              ? 'border-red-400 text-red-300'
              : 'border-primary text-textDark'
          }`}
          {...register('passwordConfirmation', { required: true })}
        />
        {errors.passwordConfirmation && (
          <p className="mt-2 text-sm text-red-500">Passwords must match</p>
        )}
      </label>
      <Button
        bgStyle="bg-btnColor"
        textColor="text-primary"
        center
        submit
        // additionalStyle="flex justify-center items-center"
      >
        Sign up
      </Button>
      <span className="my-4 flex justify-center text-lg">
        <h3>Already have an account?</h3>
        <Link href="/Login">
          <a className="pl-2 font-outfitM text-btnColor underline">Sign in</a>
        </Link>
      </span>
    </form>
  );
}
export default RegisterForm;
