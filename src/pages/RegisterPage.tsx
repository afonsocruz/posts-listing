import React from 'react';
import Layout from '../layout/Layout';
import Form from '../components/UI/Form';
import { FormValues } from '../types/types';
import { UserRegister } from '../services/AuthFirebase';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleUserRegistration = async (data: FormValues) => {
    try {
      setIsLoading(true);
      let response = await UserRegister(data.email, data.password);
      setIsLoading(false);
      navigate('/posts');
      return response;
    } catch (err) {
      return err;
    }
  };

  return (
    <Layout>
      <Form
        onSubmit={handleUserRegistration}
        isLogged={false}
        label="Criar conta"
        isLoading={isLoading}
      >
        <h3 className="text-white text-center flex items-center justify-center mb-4 xs:text-xs md:text-sm ">
          Crie sua conta!
        </h3>
      </Form>
    </Layout>
  );
};

export default RegisterPage;
