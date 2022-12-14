import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <li className="card ">
      <Link className="link" to={`/character/${props.character.id}`}>
        <img
          className="card__img"
          src={props.character.image}
          alt={props.character.name}
        />
        <p className="card__name">{props.character.name}</p>
        <p className="card__specie">{props.character.species}</p>
      </Link>
    </li>
  );
};
export default CharacterCard;
