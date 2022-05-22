import { useState } from 'react';
import './App.css';
import Pokemoncard from './components/PokemonCard/pokemoncard';
import datas from './assests/data.json';
import Title from './components/Title';
import Product from './components/Product';
import Body from './components/Body/Body';
import Destiny from './components/Destiny';
import Counter from './components/Counter';

// const objectPokemon = {
//   name: 'bulbasaur',
//   exp: '231 exp',
//   image:
//     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
//   stats: [
//     {
//       base_stat: 45,
//       name: 'hp',
//     },
//     {
//       base_stat: 49,
//       name: 'attack',
//     },
//     {
//       base_stat: 49,
//       name: 'defense',
//     },
//     {
//       base_stat: 65,
//       name: 'special-attack',
//     },
//   ],
// };

// const product = {
//   title: 'Product',
//   description: 'This is a product description',
//   childsDescription: "This the body's description",
// };
// const data = [
//   { title: 'Title 1', description: 'This is a description 1' },
//   { title: 'Title 2', description: 'This is a description 2' },
//   { title: 'Title 3', description: 'This is a description 3' },
// ];

// const datacity = [
//   { id: 1, name: 'miami' },
//   { id: 2, name: 'london' },
//   { id: 3, name: 'paris' },
//   { id: 4, name: 'new york' },
//   { id: 5, name: 'tokyo' },
//   { id: 6, name: 'sydney' },
//   { id: 7, name: 'madrid' },
//   { id: 8, name: 'berlin' },
//   { id: 9, name: 'moscow' },
//   { id: 10, name: 'rome' },
//   { id: 11, name: 'taipei' },
//   { id: 12, name: 'hong kong' },
//   { id: 13, name: 'bangkok' },
//   { id: 14, name: 'shanghai' },
//   { id: 15, name: 'beijing' },
// ];
function App() {
  const [count, setCount] = useState();
  const handleClicksum = () => {
    if (count === 10) {
      alert('You have reached the limit');
    } else {
      setCount(count + 1);
    }
  };
  const handleClickdim = () => {
    if (count === 0) {
      alert('The counter is at 0');
    } else {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  // const text = 'Here is a text that I want to display';

  // const handleClick = () => {
  //   alert(text);
  // };
  // const handleChange = (ev) => {
  //   alert(`the letter add is ${ev.target.value[counter]}`);
  //   console.log(counter);
  //   counter++;
  // };
  const num = [4, 5, 6, 7, 8, 9, 10];
  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   alert('The form has been submitted');
  // };
  return (
    <div className="App">
      {/* <button onClick={handleClick}>Click me</button>
      <input
        type="text"
        onChange={handleChange}
        onMouseOut={handleClick}
        name="user"
      />
      <button onClick={alert}>Waiting ...</button>
      {data.map((data, id) => (
        <Body key={id} {...data} />
      ))}
      <Product {...product} />
      <form onSubmit={handleSubmit}>
        <input type="texttarea" name="user" />
        <input type="email" name="mail" />
        <button type="submit">Submit</button>
      </form>
      <Destiny destiny={datacity} /> */}
      {num.map((num, id) => (
        <Counter
          key={id}
          init={num}
          dim={handleClickdim}
          sum={handleClicksum}
          reset={reset}
          count={count}
        />
      ))}
    </div>
  );
}

export default App;
