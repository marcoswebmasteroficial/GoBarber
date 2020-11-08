import React, { useCallback, useRef,useState } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(false);
  const SubmitVisiblity = () => {
    !!formRef.current?.getFieldValue('email') &&
    !!formRef.current?.getFieldValue('password')
      ? setIsDisabled(true)
      : setIsDisabled(false);
  };

  const handleSubmit = useCallback(
    async (data: { email: string; password: string }) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({ email: data.email, password: data.password });
        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(err));
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history],
  );
  return (
    <Container>
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Content>
        <img src={logo} alt="logo" />
        <div>
          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            onChange={SubmitVisiblity}
          />
        </div>
        <div>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            eyepassword
            onChange={SubmitVisiblity}
          />
        </div>
        <Link to="/forgot-password">Esqueci minha senha</Link>
        <Button type="submit" disabled={!isDisabled}>
          Entrar
        </Button>
      </Content>
    </Form>
  </Container>
  );
};
export default SignIn;
