import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../../../../services/pokemon';

export function PokemonRTK() {
  const [inputValue, setInputValue] = useState('bulbasaur');
  const { data, error, isLoading } = useGetPokemonByNameQuery(inputValue);

  return (
    <div>
      <h3>Użycie Redux RTK</h3>
      <input
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
      />
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
