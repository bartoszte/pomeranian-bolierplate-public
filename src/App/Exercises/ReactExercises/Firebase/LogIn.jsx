import { signIn } from '../../../Firebase/SignIn';
import { loginSchema } from './schemas';
import { useFormInputs } from './useFormInputs';
import { useState } from 'react';

export const LogIn = ({ setToggleLogin }) => {
  const [inputs, handleInputChange] = useFormInputs();
  const [errMessage, setErrMessage] = useState('');

  // submitEvent to po prostu event...
  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    try {
      const { login, password } = await loginSchema.validate(inputs);

      const { user } = await signIn(login, password);
      console.log('uzytkownik', user);
      setErrMessage('');
    } catch (err) {
      console.log(err.message, 'komunikat od error');
      setErrMessage(err.message);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Logowanie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          required
          autoComplete="off"
          placeholder="twój email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          required
          autoComplete="off"
          placeholder="twoje hasło"
          onChange={handleInputChange}
        />
        <input type="submit" value="Zaloguj" />
        <p>
          Jezeli nie masz konta zarejestruj sie
          <button type="button" onClick={setToggleLogin}>
            Zarejestruj sie
          </button>
        </p>
        <p className="auth-form-error">napis</p>
        <p>{errMessage}</p>
      </form>
    </div>
  );
};
