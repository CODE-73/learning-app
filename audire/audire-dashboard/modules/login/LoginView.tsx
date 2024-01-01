import { FC } from 'react';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Form from 'components/form/Form';
import { z } from 'zod';
import InputElement from 'components/form/InputElement';
import { Button } from '@nextui-org/react';
import { useLoginWithEmail } from '@learning-app/auth';
import { useRouter } from 'next/router';

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type LoginForm = z.infer<typeof LoginFormSchema>;

const LoginView: FC = () => {
  const form = useForm<LoginForm>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(LoginFormSchema),
  });
  const { isDirty, isValid } = form.formState;

  const router = useRouter();

  const { trigger } = useLoginWithEmail();
  const onSubmit = async (data: LoginForm) => {
    try {
      const r = await trigger({
        email: data.email,
        password: data.password,
      });
      // Success
      router.replace('/');
      console.log(r);
    } catch (e) {
      alert('Invalid email or password');
      console.error('Error triggering on log in:', e);
    }
  };
  return (
    <Form
      formContext={form}
      onSubmit={form.handleSubmit(onSubmit)}
      className="mt-4 p-6"
    >
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <Image
          src="/images/audire.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain mb-4 mx-auto"
        />
        <span className="block  font-medium text-slate-700">
          Welcome to AUDIRE 👋🏻
        </span>
        <span className="block text-xs text-slate-700">
          Please sign in to your account and start the adventure
        </span>

        <InputElement
          className="block  mt-6"
          name="email"
          placeholder="Email"
          required
        />

        <InputElement
          className="block mt-6"
          name="password"
          placeholder="Enter your password"
          type='password'
        />

        <Button
          type="submit"
          className="mt-6 w-full text-white font-bold py-1 px-3 rounded hover:bg-white"
          style={{
            backgroundColor: '#86198f',
          }}
          disabled={!isDirty || !isValid}
        >
          Login
        </Button>
      </div>
    </Form>
  );
};

export default LoginView;
