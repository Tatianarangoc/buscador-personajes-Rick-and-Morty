import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
const Filters = (props) => {
  return (
    <>
      <FilterByName handleFilterByName={props.handleFilterByName} />
      <FilterBySpecie handleFilterBySpecie={props.handleFilterBySpecie} />
    </>
  );
};
export default Filters;
