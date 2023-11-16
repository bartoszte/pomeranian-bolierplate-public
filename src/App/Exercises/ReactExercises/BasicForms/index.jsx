import { useState } from 'react';

export const BasicForms = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gender: '',
    password: '',
    agreements: '',
    zodiac: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, 'to jest zawartosc formData');
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div>
      <h2>Przykładowy formularz</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Imię</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>

        <div>
          <label htmlFor="surname">Nazwisko</label>
          <input
            id="surname"
            name="surname"
            type="text"
            value={formData.surname}
            onChange={handleFormChange}
            required
          />
        </div>

        <div>
          <input
            id="men"
            type="radio"
            name="gender"
            value="men"
            onChange={handleFormChange}
            checked={formData.gender === 'men'}
          />
          <label htmlFor="men">Men</label>
        </div>

        <div>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            onChange={handleFormChange}
            checked={formData.gender === 'female'}
          />
          <label htmlFor="men">female</label>
        </div>

        <div>
          <input
            id="other"
            type="radio"
            name="gender"
            value="other"
            onChange={handleFormChange}
            checked={formData.gender === 'other'}
          />
          <label htmlFor="other">Other</label>
        </div>

        <div>
          <label htmlFor="zodiac">Znak zodiaku</label>
          <select name="zodiac" id="zodiac" onChange={handleFormChange}>
            <option value="">wybierz z listy</option>
            <option value="Lew">Lew</option>
            <option value="Byk">Byk</option>
            <option value="Skorpion">Skorpion</option>
            <option value="Ryby">Ryby</option>
            <option value="Waga">Waga</option>
          </select>
        </div>

        {/* INPUT FOR PASSWORD */}
        <div>
          <label htmlFor="password">Hasło</label>
          <input
            pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleFormChange}
            required
          />
        </div>

        {/* INPUT FOR CHECKBOX */}
        <div>
          <label htmlFor="agreements">Zgody</label>
          <input
            id="agreements"
            name="agreements"
            type="checkbox"
            checked={formData.agreements}
            onChange={handleFormChange}
            required
          />
          {/* <label htmlFor="other">powiadomienia email</label> */}
        </div>

        <button type="submit">wyslij</button>
      </form>
    </div>
  );
};
