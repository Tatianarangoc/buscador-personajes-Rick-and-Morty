import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import iconLogo from '../images/logo2.png';
const Filters = (props) => {
  return (
    <>
      <img src={iconLogo} className="logo" alt="Logo" />

      <FilterByName handleFilterByName={props.handleFilterByName} />
      <FilterBySpecie handleFilterBySpecie={props.handleFilterBySpecie} />
    </>
  );
};
export default Filters;
