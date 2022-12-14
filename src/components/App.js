import '../styles/App.scss';
import getDataApi from '../services/Api';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList.js';
import Filters from './Filters';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';
import Landing from './Landing';
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
  const { pathname } = useLocation();
  const dataUrl = matchPath('/character/:characterId', pathname);
  console.log(dataUrl);
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;

  const characterFound = data.find(
    (character) => character.id === parseInt(characterId)
  );
  return (
    <>
      {' '}
      <Routes>
        {' '}
        <Route path="/" element={<Landing />} />
        <Route
          path="/CharacterCard"
          element={
            <>
              <Filters
                handleFilterByName={handleFilterByName}
                handleFilterBySpecie={handleFilterBySpecie}
              />
              <CharacterList characters={characterFilter} />
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={<CharacterDetails character={characterFound} />}
        />
      </Routes>
    </>
  );
}

export default App;
