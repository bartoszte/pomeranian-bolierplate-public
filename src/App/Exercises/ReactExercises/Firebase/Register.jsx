import { useState } from 'react';
import { registerSchema } from './schemas';
import { useFormInputs } from './useFormInputs';
import { register } from '../../../Firebase/Register';

export const Register = ({ setToggleLogin }) => {
  const [inputs, handleInputChange] = useFormInputs();
  const [errMessage, setErrMessage] = useState('');

  // submitEvent to po prostu event...
  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    try {
      const { login, password } = await registerSchema.validate(inputs);
      console.log('Rejestruje użytkownika: ', login, password);
      // register(login, password);
      const { user } = await register(login, password);
      console.log('uzytkownik', user);
      setErrMessage('');
    } catch (err) {
      console.log(err.message, 'komunikat od error');
      setErrMessage(err.message);
    }
  };
  return (
    <div className="auth-form-container">
      <h2>Rejestracja</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          required
          autoComplete="off"
          placeholder="twój email"
          onChange={handleInputChange}
        />

        {/*--- HASLO */}
        <input
          type="password"
          name="password"
          required
          autoComplete="off"
          placeholder="twoje hasło"
          onChange={handleInputChange}
        />

        {/*--- POWTÓRZ HASLO */}
        <input
          type="password"
          name="confirmPassword"
          required
          autoComplete="off"
          placeholder="twoje hasło"
          onChange={handleInputChange}
        />

        {/*--- PRZYCISK REJESTRACJI */}
        <input type="submit" value="Zarejestruj" />
        <p>
          Jezel masz już konto to zaloguj sie
          <button type="button" onClick={setToggleLogin}>
            Zaloguj sie
          </button>
        </p>
        <p className="auth-form-error">napis</p>
        <p>{errMessage}</p>
      </form>
    </div>
  );
};
