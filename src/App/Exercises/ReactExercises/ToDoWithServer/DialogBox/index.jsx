import './style.css';
import { Button } from '../Button';

export const DialogBox = ({ text, buttonFunction }) => {
  return (
    <div className="dialogBox">
      <div className="text">{text}</div>
      <Button
        value="ODŚWIEŻ WIDOK"
        variant="tertiary"
        onClickFunc={buttonFunction}
      />
    </div>
  );
};
