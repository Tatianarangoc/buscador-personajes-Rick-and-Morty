import { NavLink } from 'react-router-dom';
import iconLogo from '../images/logo2.png';

//stylesimport '../styles/components/Landing.scss';

function Landing() {
  return (
    <>
      <section className="landing">
        <img src={iconLogo} className="logoLanding" alt="Logo" />

        <h1 className="landing_title">the adventure begins</h1>
      </section>{' '}
      <NavLink className="landingbtn" to="/CharacterCard">
        Start
      </NavLink>
    </>
  );
}

export default Landing;
