import { NavLink } from 'react-router-dom';
//stylesimport '../styles/components/Landing.scss';

function Landing() {
  return (
    <section>
      <h1>the adventure begins</h1>
      <NavLink to="/CharacterCard">Start</NavLink>
    </section>
  );
}

export default Landing;
