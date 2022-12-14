const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilterBySpecie(ev.target.value);
  };
  return (
    <>
      <form className="formSpecie">
        <label className="formSpecie_label " htmlFor="species">
          Species:
        </label>
        <select
          className="formSpecie_input-text"
          name="gender"
          id="gender"
          onChange={handleChange}
        >
          <option className="formSpecie_option" value="all">
            All{' '}
          </option>
          <option className="formSpecie_option" value="Human">
            Human{' '}
          </option>
          <option className="formSpecie_option" value="Alien">
            Alien{' '}
          </option>
        </select>
      </form>
    </>
  );
};
export default FilterBySpecie;
