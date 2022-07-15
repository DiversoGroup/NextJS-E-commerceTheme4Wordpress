import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

function Login() {
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
    <div className="flex h-screen min-h-[660px] flex-col items-center justify-center space-y-[9vh] overflow-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat px-8">
      <button className="h-12  w-full rounded-lg bg-primary" type="button">
        google
      </button>
      <form className="w-full font-outfitL" onSubmit={handleSubmit(sendData)}>
        <label
          htmlFor="email"
          className={`w-full  ${
            errors.email ? 'text-red-400' : 'text-btnColor'
          }`}
        >
          <span className="mt-3 mb-2 block">Email</span>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="elpepe@gmail.com"
            className={`h-12 w-full rounded-lg border-2 bg-primary py-2 px-3 outline-none placeholder:text-textGray focus:border-btnColor ${
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
          <span className="mt-3 mb-2 block">Password</span>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="superduperpassword"
            className={`h-12 w-full rounded-lg border-2 bg-primary py-2 px-3 outline-none placeholder:text-textGray focus:border-btnColor ${
              errors.email
                ? 'border-red-400 text-red-300'
                : 'border-primary text-textDark'
            }`}
            // ref={register()}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              Your password is required.
            </p>
          )}
          {/* <input
            type="submit"
            className="mt-[3vh] h-12  w-full rounded-lg bg-btnColor font-outfitL text-lg text-primary sp:h-14 sp:text-2xl"
          /> */}
          <button
            className="mt-[3vh] h-12  w-full rounded-lg bg-btnColor font-outfitL text-lg text-primary sp:h-14 sp:text-2xl"
            type="submit"
          >
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}
export default Login;
