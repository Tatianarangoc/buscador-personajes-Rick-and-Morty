import CharacterCard from './CharacterCard';
const CharacterList = ({ characters }) => {
  const characterElement = characters.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });
  return (
    <section>
      <ul>{characterElement}</ul>
    </section>
  );
};
export default CharacterList;
