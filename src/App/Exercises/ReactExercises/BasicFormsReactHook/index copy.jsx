import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './style.css';

const schema = yup.object({
  name: yup.string('Wpisz imię jako tekst!').required('Imię jest wymagane!'),
  surname: yup.string().required(),
  gender: yup.string().oneOf(['female', 'other', 'male']).required(),
  password: yup.string().required(),
  agreements: yup.boolean().required(),
  pets: yup.string().required(),
  paymentMethod: yup.string().oneOf(['blik', 'paypal', 'przelew']).required(),
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

  return (
    <div>
      <h2>ZAMÓWIENIE PRODUKTU</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <div>
          <label>Imię</label>
          <input
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <input {...register('surname')} />

        <div>
          <label>Płeć</label>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              {...register('gender')}
            />
            <label htmlFor="male">Mężczyzna</label>
          </div>

          <div>
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              {...register('gender')}
            />
            <label htmlFor="female">Kobieta</label>
          </div>

          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="other"
              {...register('gender')}
            />
            <label htmlFor="other">Inna</label>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
