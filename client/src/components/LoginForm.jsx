import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
            errors.email
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
      <span className="my-3 block  w-full text-right">
        <a
          className="font-outfitM text-btnColor underline"
          href="https://thebeginningaftertheend.online/manga/the-beginning-after-the-end-chapter-154/"
        >
          Forgot your password?
        </a>
      </span>
      <button
        className="mt-[3vh] h-12  w-full rounded-lg bg-btnColor font-outfitL text-lg text-primary sp:h-14 sp:text-2xl"
        type="submit"
      >
        Sign in
      </button>
      <span className="my-4 flex justify-center text-lg">
        <h3>Don’t have an account?</h3>
        <a
          className="pl-2 font-outfitM text-btnColor underline"
          href="https://thebeginningaftertheend.online/manga/the-beginning-after-the-end-chapter-154/"
        >
          Sign up
        </a>
      </span>
    </form>
  );
}
export default LoginForm;
