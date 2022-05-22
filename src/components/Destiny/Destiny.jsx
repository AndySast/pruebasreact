import { useState } from 'react';

const Destiny = (props) => {
  let data = props.destiny;
  const handleSelect = (e) => {
    setdestiny(e.target.value);
    // if (e.target.value) {
    //   alert(`The destiny has been is ${e.target.value}`);
    // }
  };
  const [destiny, setdestiny] = useState('');

  return (
    <div>
      <h1>Destiny</h1>
      <select name="destiny" onChange={handleSelect}>
        <option value="">Select a destiny</option>
        {data.map((data, id) => (
          <option
            key={id}
            value={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          >
            {data.name}
          </option>
        ))}
      </select>
      <br />
      <h1>Your destiny is {destiny}</h1>
    </div>
  );
};
export default Destiny;
