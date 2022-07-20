import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from './Button';
import InputTextElement from './InputTextElement';
import LabelElement from './LabelElement';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

function EmailForm() {
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    criteriaMode: 'all',
  });
  const sendData = (data) => {
    console.log(data);
  };
  return (
    <form
      className="mt-6 w-full md:max-w-[440px]"
      onSubmit={handleSubmit(sendData)}
    >
      <LabelElement
        forElement="email"
        error={errors.email}
        errorMessage="A valid email is required."
      >
        <InputTextElement
          placeholder="email@example.com"
          error={errors.email}
          register={register('email', { required: true })}
        />
      </LabelElement>
      <Button
        additionalStyle="border-btnColor border-2"
        bgStyle="bg-transparent"
        textColor="text-btnColor"
        submit
        center
      >
        Send
      </Button>
    </form>
  );
}
export default EmailForm;
