import React from 'react';
import Layout from '../layout/Layout';
import Form from '../components/UI/Form';
import { FormValues } from '../types/types';
import { UserLogin } from '../services/AuthFirebase';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const HomePage: React.FC = () => {
  const { setUser } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleUserLogin = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const response = await UserLogin(data.email, data.password);
      setUser(response?.user);
      setIsLoading(false);
      toast.success('Logado com sucesso!');
      navigate('/posts');
      return response;
    } catch (err) {
      setIsLoading(false);
      toast.error('Email ou senha inválidos');
      return err;
    }
  };

  return (
    <Layout>
      <Form
        onSubmit={handleUserLogin}
        isLogged={false}
        label="Entrar"
        isLoading={isLoading}
      >
        <h3 className="text-white text-center flex items-center justify-center mb-4 xs:text-xs md:text-sm ">
          Crie postagens e se conecte com muitas pessoas!
        </h3>
      </Form>
    </Layout>
  );
};

export default HomePage;
