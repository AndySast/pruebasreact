import './App.css';
import Pokemoncard from './components/PokemonCard/pokemoncard';
import datas from "./assests/data.json";
import Title from './components/Title';
import Product from './components/Product';
import Body from './components/Body/body';

const objpokemon = {
  "name": "bulbasaur",
  "exp": "231 exp",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  "stats": [
    {
      "base_stat": 45,
      "name": "hp"
    },
    {
      "base_stat": 49,
      "name": "attack"
    },
    {
      "base_stat": 49,
      "name": "defense"
    },
    {
      "base_stat": 65,
      "name": "special-attack"
    }
  ]
}

const product = {
  "title": "Product",
  "description": "This is a product description"
}
const data = [
  {title: "Title 1", description: "This is a description 1"},
  {title: "Title 2", description: "This is a description 2"},
  {title: "Title 3", description: "This is a description 3"},
]
function App() {  
  const letra = "Aquí va lo que quiero mostrar, capiche?";
  
  const handleClick = () => {
    alert(letra);
  }
  const handleChange = (e) => {
    console.log(e.target.name ,e.target.value);
    }
  return (
    <div className="App">
        <button onClick={handleClick}>Click me</button>
        <input type="text" onChange={handleChange} name= "user"/>
        <button onClick={alert}>esperando ...</button>
        {
        data.map((data, id) => (<Body key={id} {...data}/>))
      }
    </div>
  );
}

export default App;
