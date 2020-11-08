import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useField } from '@unform/core';

import { Container, Error, TXTError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: {};
  icon?: React.ComponentType<IconBaseProps>;
  eyepassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle,
  icon: Icon,
  eyepassword,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [passwordShown, setPasswordShown] = useState(true);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const handleInputFocus = useCallback(() => setIsFocused(true), []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <Container
        style={containerStyle}
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
      >
        {Icon && <Icon size={20} color={ error    ? '#c53030' : '#8257e5'} />}
        <input
          autoComplete="new-password"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
          type={passwordShown && !!eyepassword ? 'password' : 'text'}
        />

        {!error  && eyepassword && (
          <i onClick={togglePasswordVisiblity}>
            {passwordShown ? (
              <FaEye color="#8257e5" size={20} />
            ) : (
              <FaEyeSlash color="#8257e5" size={20} />
            )}
          </i>
        )}

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Container>
      {error && <TXTError>{error}</TXTError>}
    </>
  );
};

export default Input;