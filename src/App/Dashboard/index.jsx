import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData';
import { SingleBox } from './SingleBox/SingleBox';
import PersonalCardIcon from '../Images/tiles/personalcard.svg';

import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      {/* <Blocks /> */}
      <div className="intro">
        <h3>Hej, tu Bartek!</h3>
        Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
        na kursie oraz umejętności zdobytych na kursie)
      </div>
      <SingleBox
        source={PersonalCardIcon}
        title="Moje cv"
        text="podgląd cv wraz z doświadczeniem"
      />
      <SingleBox
        source={PersonalCardIcon}
        title="Ćwiczenia"
        text="wszystkie wykonane ćwiczenia"
      />
      <SingleBox
        source={PersonalCardIcon}
        title="Blog"
        text="wpisy blogowe o technologii front-end"
      />
      <SingleBox
        source={PersonalCardIcon}
        title="Tech stack"
        text="stack technologiczny realizowany na kursie"
      />
      <SingleBox
        source={PersonalCardIcon}
        title="FAQ"
        text="odpowiedzi na najczęstsze pytania"
      />
      <div className="box-blank"></div>
      <MyData extraStyle="my-data" />
    </div>
  );
};

// export function Dashboard() {
//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       <p>
//         Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
//         na kursie oraz umejętności zdobytych na kursie)
//       </p>
//     </div>
//   );
// }
