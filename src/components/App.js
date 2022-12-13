import '../styles/App.scss';
import getDataApi from '../services/Api';
import { useEffect, useState } from 'react';
import iconLogo from '../styles/logo.png';
import CharacterList from './CharacterList.js';
import Filters from './Filters';

function App() {
  // VARIABLES ESTADO

  const [data, setData] = useState([]);
  const [filterByName, setfilterByName] = useState([]);
  const [FilterBySpecie, setFilterBySpecie] = useState('all');
  // USEEFFECT ?
  useEffect(() => {
    getDataApi().then((cleanData) => {
      setData(cleanData);
      setfilterByName(cleanData);
    });
  }, []);
  // FUNCIONES HANDLER

  const handleFilterByName = (value) => {
    setfilterByName(
      data.filter((character) => {
        return character.name.toLowerCase().includes(value.toLowerCase());
      })
    );
    if (filterByName.length === 0) {
      alert`No hay ningún personaje que coincida con la palabra ${value} `;
    }
  };
  const handleFilterBySpecie = (value) => {
    setFilterBySpecie(value);
  };
  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const characterFilter = filterByName.filter((character) => {
    return FilterBySpecie === 'all'
      ? true
      : character.species === FilterBySpecie;
  });
  // HTML EN EL RETURN

  return (
    <>
      <img src={iconLogo} className="logo" alt="Logo" />

      <Filters
        handleFilterByName={handleFilterByName}
        handleFilterBySpecie={handleFilterBySpecie}
      />
      <CharacterList characters={characterFilter} />
    </>
  );
}

export default App;
