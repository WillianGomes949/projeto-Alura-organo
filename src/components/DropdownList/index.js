import './DropdownList.css';

const DropdownList = (props) => {
  return (
    <div className='dropdown-list'>
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => {
          return <option>{item}</option>
        })}
      </select>
    </div>
  );
};

export default DropdownList;
