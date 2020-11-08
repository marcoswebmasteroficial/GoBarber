import React, {useRef, useCallback} from 'react';
import {Image, View, TextInput, Alert} from 'react-native';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import * as Yup from 'yup';
import {Container, Title, BackToSignIn, BackToSignInText} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const handleSignUp = useCallback(
    async (data: {name: string; email: string; password: string}) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        console.log(data);
        await api.post('/users', data);

        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você já pode fazer logon na aplicação.',
        );
        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer o cadastro, cheque os campos',
        );
      }
    },
    [navigation],
  );
  return (
    <>
      <Container>
        <Image source={logo} />
        <View>
          <Title>Crie sua conta</Title>
        </View>
        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input
            autoCapitalize="words"
            name="name"
            icon="user"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.current?.focus();
            }}
          />
          <Input
            ref={emailInputRef}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            name="email"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />
          <Input
            ref={passwordInputRef}
            secureTextEntry
            name="password"
            icon="lock"
            placeholder="Senha"
            textContentType="newPassword"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
          <Button onPress={() => formRef.current?.submitForm()}>
            Cadastrar
          </Button>
        </Form>
      </Container>
      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};
export default SignUp;
