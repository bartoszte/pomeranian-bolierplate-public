import { logOut } from '../../../Firebase/logOut';

export const LogOut = () => {
  return (
    <button className="log-out-button" onClick={logOut}>
      Wyloguj
    </button>
  );
};
