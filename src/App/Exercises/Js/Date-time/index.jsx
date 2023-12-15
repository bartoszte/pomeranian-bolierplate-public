import './styles.css';

export function DateTimeBasics() {
  //

  // sposob z time stamp
  const currentDate = Date.now();
  console.log(currentDate, 'aktualna data w milisekundach');

  // sposob z obiektem
  const currentDateObject = new Date();
  console.log(currentDateObject, 'aktualna data');
  console.log(currentDateObject.toDateString(), 'aktualna data to date string');
  console.log(currentDateObject.toISOString(), 'aktualna data to ISO');
  console.log(currentDateObject.getFullYear(), 'aktualny rok');
  console.log(currentDateObject.getMinutes(), 'aktualna minuta');
  console.log('///////////////////////////////////////');

  // parse() - timestamp
  console.log(Date.parse('2021-05-12T13:40:00.000Z'), 'Date.parse()');

  const testDate = new Date('2021-05-12T13:40:00.000Z');
  console.log(testDate, 'testDate');

  // Ile zostało dni do nowego roku
  //
  // Date.now wyswietla time stamp w milisekundach
  const currentTimestamp = Date.now();
  const newYearTimestamp = Date.parse('2024-01-01T00:00:00.000Z');
  const difference = newYearTimestamp - currentTimestamp;
  const daysUntilnewYear = Math.floor(difference / (1000 * 60 * 60 * 24));

  console.log(daysUntilnewYear, 'daysUntilnewYear');

  //////////////////////////////////////////////////////////////////////////////////
  // return glownej funkcji
  //////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container--date-time">
      <h3>Zabawa z czasem i datami</h3>
    </div>
  );
}
