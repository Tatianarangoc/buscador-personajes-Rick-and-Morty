import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
  return (
    <li className="card">
      <a href={props.character.id}>
        <img
          className="card__img"
          src={props.character.image}
          alt={props.character.name}
        />
        <p className="card__title">{props.character.name}</p>
        <p className="card__description">{props.character.species}</p>
      </a>
    </li>
  );
};
export default CharacterCard;
