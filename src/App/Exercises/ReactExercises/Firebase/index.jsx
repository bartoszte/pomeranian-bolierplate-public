import { app } from '../../../Firebase/FirebaseConfig';
import { useAuthStatus } from '../../../Firebase/useAuthStatus';
import { AuthenticateUser } from './AuthenticateUser';
import { LogOut } from './LogOut';
import { Posts } from './Posts';
import './styles.css';

export const Firebase = () => {
  console.log('firebase: ', app.options.projectId);
  const [isLogged, user] = useAuthStatus();
  console.log(user);
  return (
    <div>
      <h2>Uwierzytelnianie Firebase</h2>

      {/* wykorzystanie 3 stanow do handlingu wyswietlania komponentow */}
      {/* dodane to jest po to aby w czasie gdy firebase nie ma info nie wyswietlal chwilowo okna do logowania */}
      {isLogged === undefined ? null : (
        <div>
          {isLogged ? (
            <div>
              <div>Jesteś zalogowany jako: {user?.email}</div>
              <Posts />
              <LogOut />
            </div>
          ) : (
            <AuthenticateUser />
          )}
        </div>
      )}
    </div>
  );
};
