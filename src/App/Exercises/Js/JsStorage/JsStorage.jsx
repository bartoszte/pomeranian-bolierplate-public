import { CookieStorage } from './CookieStorage';
import { LocalStorage } from './LocalStorage';

export function JsStorage() {
  //  JSON - LEKKI FORMAT WYMIANY DANYCH - JavaScript Object Notation
  //  moze byc wykorzystywane przez różne języki programowania np. do wymiany / przechowywania informacji
  //  rozszerzenie pliku to .json

  //  XML - Extensible Markup Language
  //  xml trudniejszy do nauczenia niz json
  //  xml wiekszy rozmiar / objetosc niz json
  //  xml wolniejszy?
  //  xml to wieksza kontrola nad struktura wymienianych danych

  const jsonString = '{"name":"John", "age":30, "car":null}';
  // parsowanie stringa poprzez metodę parse JSON >> zamiana na obiekt
  // parsowanie = deserializacja
  const jsonParsed = JSON.parse(jsonString);

  const jsonBoolean = 'true';
  const jsonBooleanParsed = JSON.parse(jsonBoolean);

  const objForSerialization = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    cars: ['Ford', 'BMW', 'Fiat'],
    isAdult: true,
  };
  // serializacja obiektu poprzez metodę stringify JSON >> zamiana na string
  const serializedObj = JSON.stringify(objForSerialization);

  const emptyValue = null;
  const emptyValueSerialized = JSON.stringify(emptyValue);
  console.log(
    emptyValueSerialized,
    'efekt zamiany null na string poprzez serializacje'
  );

  return (
    <div>
      <h1>JSON, XML, STORAGE</h1>
      <h2>Parsowanie</h2>
      <p>
        jsonString {jsonString} jsonBoolean {jsonBoolean}
      </p>
      <p>
        jsonParsed {jsonParsed.name} jsonBooleanParsed{' '}
        {jsonBooleanParsed && 'zmienna to prawda'}
      </p>
      <p>serializedObj {serializedObj}</p>

      <h2>Storage</h2>
      <p>Cookie storage (maks. ok. 4kb)</p>
      <CookieStorage />

      <p>Local storage (maks. ok. 5MB-10MB)</p>
      <LocalStorage />

      <p>Session storage (maks. ok. 5MB-10MB)</p>
    </div>
  );
}
