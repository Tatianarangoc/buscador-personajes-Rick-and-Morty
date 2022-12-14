import { Link } from 'react-router-dom';
import iconLogo from '../images/logo2.png';

const CharacterDetails = (props) => {
  return (
    <>
      <img src={iconLogo} className="logoCardDetail" alt="Logo" />
      <article className="carddetail">
        <img
          className="card__img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />{' '}
        <div>
          <p className="card__name">{props.character.name}</p>
          <p className="card__description">{props.character.species}</p>
          <p className="card__description">{props.character.status}</p>
          <p className="card__description">{props.character.origin}</p>
          <p className="card__description">{props.character.episode}</p>
        </div>
      </article>
      <Link className="linkbtn" to="/CharacterCard">
        Go back
      </Link>
    </>
  );
};
export default CharacterDetails;
