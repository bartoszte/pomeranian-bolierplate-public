import { useState } from 'react';
import { LogIn } from './LogIn';
import { Register } from './Register';

export const AuthenticateUser = () => {
  const [toggleLogin, setToggleLogin] = useState(false);

  if (toggleLogin)
    return (
      <div>
        <Register setToggleLogin={() => setToggleLogin(!toggleLogin)} />
      </div>
    );
  return (
    <div>
      <LogIn setToggleLogin={() => setToggleLogin(!toggleLogin)} />
    </div>
  );
};
