import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {
  return (
    <article className="card">
      <img
        className="card__img"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <p className="card__title">{props.character.name}</p>
      <p className="card__description">{props.character.species}</p>
      <p className="card__description">{props.character.status}</p>
      <p className="card__description">{props.character.origin}</p>
      <p className="card__description">{props.character.episode}</p>
      <Link to="/">Ir a Inicio</Link>
    </article>
  );
};
export default CharacterDetails;
