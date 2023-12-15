import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './style.css';

const schema = yup.object({
  name: yup.string('Wpisz imię jako tekst!').required('Imię jest wymagane!'),
  pseudo: yup
    .string('Wpisz pseudonim jako tekst!')
    .required('Pseudonim jest wymagany!'),
  deliveryAddress: yup
    .string('Wpisz adres jako tekst!')
    .required('adres jest wymagany!'),
  email: yup.string('Wpisz email jako tekst!').required('email jest wymagan!'),

  // surname: yup.string().required(),
  // gender: yup.string().oneOf(['female', 'other', 'male']).required(),
  password: yup.string().required(),
  // agreements: yup.boolean().required(),
  // pets: yup.string().required(),
  paymentMethod: yup.string().oneOf(['blik', 'paypal', 'przelew']).required(),
  additionalOption1: yup.string(),
  additionalOption2: yup.string(),
  additionalOption3: yup.string(),
});

export const BasicFormsReactHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // useEffect(() => {
  //   console.log(formState);
  // }, []);

  return (
    <div>
      <h2>ZAMÓWIENIE PRODUKTU</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container--formsReactHook"
      >
        {/* FORMA PŁATNOŚCI */}
        <div>
          <label>Wybierz formę płatności*</label>
          <div>
            <input
              id="blik"
              type="radio"
              name="paymentMethod"
              value="blik"
              {...register('paymentMethod')}
            />
            <label htmlFor="blik">blik</label>
          </div>

          <div>
            <input
              id="paypal"
              type="radio"
              name="paymentMethod"
              value="paypal"
              {...register('paymentMethod')}
            />
            <label htmlFor="paypal">paypal</label>
          </div>

          <div>
            <input
              id="przelew"
              type="radio"
              name="paymentMethod"
              value="przelew"
              {...register('paymentMethod')}
            />
            <label htmlFor="przelew">przelew</label>
          </div>
        </div>

        {/* OPCJE DODATKOWE */}
        <div>
          <label>Opcje dodatkowe do zamówienia</label>
          <div>
            <input
              id="ustawienie środowiska"
              type="checkbox"
              name="additionalOption1"
              value="ustawienie środowiska"
              {...register('additionalOption1')}
            />
            <label htmlFor="ustawienie środowiska">ustawienie środowiska</label>
          </div>

          <div>
            <input
              id="intro do GitHub"
              type="checkbox"
              name="additionalOption2"
              value="intro do GitHub"
              {...register('additionalOption2')}
            />
            <label htmlFor="intro do GitHub">intro do GitHub</label>
          </div>

          <div>
            <input
              id="materiały dodatkowe"
              type="checkbox"
              name="additionalOption3"
              value="materiały dodatkowe"
              {...register('additionalOption3')}
            />
            <label htmlFor="materiały dodatkowe">materiały dodatkowe</label>
          </div>
        </div>

        <h2>DANE DO REALIZACJI ZAMÓWIENIA</h2>

        {/* IMIE i nazwisko */}
        <div>
          <label>Imię i nazwisko*</label>
          <input
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        {/* PSEUDO*/}
        <div>
          <label>Twój pseudonim*</label>
          <input {...register('pseudo')} />
        </div>

        {/* ADRES WYSYŁKI*/}
        <div>
          <label>Adres do wysyłki*</label>
          <input {...register('deliveryAddress')} />
        </div>

        {/* ADRES EMAIL*/}
        <div>
          <label>Adres e-mail*</label>
          <input {...register('email')} />
        </div>

        {/* HASŁO */}
        <div>
          <label>Hasło</label>
          <input {...register('password')} />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};
