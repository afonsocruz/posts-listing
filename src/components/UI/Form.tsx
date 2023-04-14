import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { Link } from 'react-router-dom';
import LoadingPage from './LoadingSpinner';

interface FormValues {
  email: string;
  password: string;
}

interface FormProps {
  onSubmit: (data: FormValues) => void;
  children?: React.ReactNode;
  isLogged: boolean;
  label: string;
  isLoading: boolean;
}

const Form: React.FC<FormProps> = (props: FormProps) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmitHandler = (data: FormValues) => {
    props.onSubmit(data);
  };

  if (props.isLoading) return <LoadingPage size={40} />;

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 py-10">
      {props.children}
      <form onSubmit={handleSubmit(onSubmitHandler)} className="lg:w-1/4">
        <input
          {...register('email')}
          className="block w-full text-sm p-2 pl-4 mb-4 text-white border rounded-sm bg-transparent outline-none border-fluorescent placeholder:xs:text-xs placeholder:md:text-sm"
          placeholder="Email"
        />
        <input
          {...register('password')}
          className="block w-full p-2 pl-4 text-sm mb-4 text-white border rounded-sm bg-transparent outline-none border-fluorescent placeholder:xs:text-xs placeholder:md:text-sm"
          type="password"
          placeholder="Senha"
        />
        <Button
          type="submit"
          className="w-full rounded-sm p-2 pl-4 mb-2 bg-fluorescent text-white xs:text-xs md:text-sm opacity-70 hover:opacity-100 transition-opacity"
          label={props.label}
        />
      </form>
      {props.label === 'Entrar' ? (
        <>
          <h3 className="text-white xs:text-xs md:text-sm">
            Não tem uma conta? <Link to="/register">Crie uma aqui</Link>
          </h3>
        </>
      ) : (
        <>
          <h3 className="text-white xs:text-xs md:text-sm">
            Já tem uma conta? <Link to="/">Entre aqui</Link>
          </h3>
        </>
      )}
    </div>
  );
};

export default Form;
