const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilterBySpecie(ev.target.value);
  };
  return (
    <>
      <label className="form__label " htmlFor="species">
        Species:
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        onChange={handleChange}
      >
        <option value="all">Todos </option>
        <option value="Human">Human </option>
        <option value="Alien">Alien </option>
      </select>
    </>
  );
};
export default FilterBySpecie;
